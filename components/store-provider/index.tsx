"use client";

import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../../lib/store";
import IUsuario from "@/models/usuario";
import { login } from "@/lib/features/auth/auth-slice";

interface StoreProviderProps {
	token: string | undefined;
	children: React.ReactNode;
}

function StoreProvider({ token, children }: StoreProviderProps) {
	const storeRef = useRef<AppStore | null>(null);

	if (!storeRef.current) {
		storeRef.current = makeStore();
	}

	useEffect(() => {
		if (storeRef.current === null || token === undefined) {
			return;
		}

		storeRef.current!.dispatch(login({ token: token } as IUsuario));
	}, [token]);

	return <Provider store={storeRef.current}>{children}</Provider>;
}
export default StoreProvider;
