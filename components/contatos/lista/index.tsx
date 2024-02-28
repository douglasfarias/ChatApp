import ConversasService from "@/services/conversas-service";
import ListaDeConversasItem from "../item";
import useHttpClient from "@/hooks/http-client";

export default async function ListaDeConversas() {
	const httpClient = useHttpClient();
	const contatos = await new ConversasService(httpClient).getAll();

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
