import useHttpClient from "../http-client";
import ConversasService from "@/services/conversas-service";

function useConversas() {
	const httpClient = useHttpClient();
	return new ConversasService(httpClient);
}

export default useConversas;
