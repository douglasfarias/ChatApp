import ContatoService from "@/services/contatos-service";
import useHttpClient from "../http-client";

function useContatos() {
	const httpClient = useHttpClient();
	return new ContatoService(httpClient);
}

export default useContatos;
