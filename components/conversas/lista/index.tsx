"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from "../../../lib/hooks";
import ListaDeConversasItem from "../item";
import Avatar from "@/components/avatar";
import IConversa from "@/models/conversa";
import HttpClient from "@/data/http-client";
import ConversasService from "@/services/conversas-service";

export default function ListaDeConversas() {
	const { user, isAuthenticated } = useAppSelector((state) => state.auth);
	const [conversas, setConversas] = useState<IConversa[]>();
	useEffect(() => {
		async function getConversas() {
			const http = HttpClient.getInstance(user?.token);
			setConversas(await new ConversasService(http).getAll());
		}

		if (isAuthenticated) {
			getConversas();
		}
	}, [isAuthenticated, user?.token]);

	return (
		<>
			<p className="font-bold text-xl">Conversas</p>
			{conversas === undefined && (
				<>
					<li className="flex w-80 animate-pulse">
						<div
							className={`flex flex-row w-full gap-3 p-3 items-center rounded bg-slate-600`}>
							<Avatar />
							<p className="pr-8"></p>
						</div>
					</li>
				</>
			)}
			<ul>
				{conversas?.map((contato) => (
					<ListaDeConversasItem key={contato.id} model={contato} />
				))}
			</ul>
		</>
	);
}
