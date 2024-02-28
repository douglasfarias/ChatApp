import ListaDeConversasItem from "../item";
import useConversas from "@/hooks/conversa";

export default async function ListaDeConversas() {
	const conversas = useConversas();

	return (
		<>
			<p className="font-bold text-xl">Conversas</p>
			<ul>
				{(await conversas.getAll()).map((contato) => (
					<ListaDeConversasItem key={contato.id} model={contato} />
				))}
			</ul>
		</>
	);
}
