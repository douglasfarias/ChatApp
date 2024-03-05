"use client";

import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../../lib/store";
import { initializeConversas } from "@/lib/features/conversa/conversa-slice";
import ConversasService from "@/services/conversas-service";
import HttpClient from "@/data/http-client";

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

			const http = HttpClient.getInstance(token!);
			const conversas = await new ConversasService(http).getAll();
			storeRef.current!.dispatch(initializeConversas(conversas));
		}

		getConversas();
	}, [token]);

	return <Provider store={storeRef.current}>{children}</Provider>;
}
export default StoreProvider;
