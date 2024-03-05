"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../../lib/store";
import { initializeConversas } from "@/lib/features/conversa/conversa-slice";
import IConversa from "@/models/conversa";

function StoreProvider({
	conversas,
	children,
}: {
	conversas: IConversa[];
	children: React.ReactNode;
}) {
	const storeRef = useRef<AppStore | null>(null);

	if (!storeRef.current) {
		storeRef.current = makeStore();
	}

	useEffect(() => {
		if (storeRef.current) {
			storeRef.current!.dispatch(initializeConversas(conversas));
		}
	}, [storeRef, conversas]);

	return <Provider store={storeRef.current}>{children}</Provider>;
}
export default StoreProvider;
