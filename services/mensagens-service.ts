import CreateMensagemCommand from "@/commands/CreateMensagemCommand";
import IMensagem from "@/models/mensagem";
import { AxiosInstance } from "axios";

class MensagensService {
	private httpClient: AxiosInstance;
	constructor(httpClient: AxiosInstance) {
		this.httpClient = httpClient;
	}

	public async create(command: CreateMensagemCommand): Promise<string> {
		const response = await this.httpClient.post(`/api/mensagens`, command);
		return response.data;
	}

	public async get(id: string): Promise<IMensagem> {
		const response = await this.httpClient.get(`${`/api/mensagens`}/${id}`);
		return response.data;
	}

	public async getByConversaId(id: string): Promise<IMensagem[]> {
		const response = await this.httpClient.get(`${`/api/mensagens`}/conversa/${id}`);
		return response.data;
	}

	public async update(id: string, mensagem: IMensagem): Promise<IMensagem> {
		const response = await this.httpClient.put(`${`/api/mensagens`}/${id}`, mensagem);
		return response.data;
	}

	public async delete(id: string): Promise<void> {
		await this.httpClient.delete(`${`/api/mensagens`}/${id}`);
	}
}

export default MensagensService;
