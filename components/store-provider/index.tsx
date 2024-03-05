"use client";

import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../../lib/store";
import { initializeConversas } from "@/lib/features/conversa/conversa-slice";
import ConversasService from "@/services/conversas-service";
import HttpClient from "@/data/http-client";
import IUsuario from "@/models/usuario";
import { login } from "@/lib/features/auth/auth-slice";

function StoreProvider({
	token,
	children,
}: {
	token: string | undefined;
	children: React.ReactNode;
}) {
	const storeRef = useRef<AppStore | null>(null);

	if (!storeRef.current) {
		storeRef.current = makeStore();
	}

	useEffect(() => {
		async function getConversas() {
			if (storeRef.current === null || token === undefined) {
				return;
			}

			storeRef.current!.dispatch(login({ token: token } as IUsuario));

			const http = HttpClient.getInstance(token!);
			const conversas = await new ConversasService(http).getAll();
			storeRef.current!.dispatch(initializeConversas(conversas));
		}

		getConversas();
	}, [token]);

	return <Provider store={storeRef.current}>{children}</Provider>;
}
export default StoreProvider;
