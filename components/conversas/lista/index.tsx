"use client";

import { useAppSelector } from "../../../lib/hooks";
import ListaDeConversasItem from "../item";
import Avatar from "@/components/avatar";

export default function ListaDeConversas() {
	const conversas = useAppSelector((state) => state.conversas.value);
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
