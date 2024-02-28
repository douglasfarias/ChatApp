import MensagensService from "@/services/mensagens-service";
import useHttpClient from "../http-client";

function useMensagens() {
	const httpClient = useHttpClient();
	return new MensagensService(httpClient);
}

export default useMensagens;
