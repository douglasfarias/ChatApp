import ConversasService from "@/services/conversas-service";
import ListaDeConversasItem from "../item";
import ContatoService from "@/services/contatos-service";

export default async function ListaDeConversas() {
	const contatos = await ConversasService.getAll();

	return (
		<>
			<p className="font-bold text-xl">Conversas</p>
			<ul>
				{contatos.map((contato) => (
					<ListaDeConversasItem key={contato.id} model={contato} />
				))}
			</ul>
		</>
	);
}
