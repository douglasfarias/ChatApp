"use client";

import Spinner from "@/components/spinner";
import { useAppSelector } from "../../../lib/hooks";
import ListaDeConversasItem from "../item";

export default function ListaDeConversas() {
	const conversas = useAppSelector((state) => state.conversas.value);
	return (
		<>
			<p className="font-bold text-xl">Conversas</p>
			{conversas === undefined && <Spinner visible={true} />}
			<ul>
				{conversas?.map((contato) => (
					<ListaDeConversasItem key={contato.id} model={contato} />
				))}
			</ul>
		</>
	);
}
