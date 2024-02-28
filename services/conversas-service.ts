import IConversa from "@/models/conversa";
import { AxiosInstance } from "axios";

class ConversasService {
	private httpClient: AxiosInstance;
	constructor(httpClient: AxiosInstance) {
		this.httpClient = httpClient;
	}

	public async getAll(): Promise<IConversa[]> {
		const response = await this.httpClient.get<IConversa[]>(`/api/conversas`);
		return response.data;
	}

	public async getById(id: string): Promise<IConversa> {
		const response = await this.httpClient.get<IConversa>(`${`/api/conversas`}/${id}`);
		return response.data;
	}

	public async create(conversa: IConversa): Promise<IConversa> {
		const response = await this.httpClient.post<IConversa>(`/api/conversas`, conversa);
		return response.data;
	}

	public async update(id: string, conversa: IConversa): Promise<IConversa> {
		const response = await this.httpClient.put<IConversa>(
			`${`/api/conversas`}/${id}`,
			conversa
		);
		return response.data;
	}

	public async delete(id: string): Promise<void> {
		await this.httpClient.delete(`${`/api/conversas`}/${id}`);
	}
}

export default ConversasService;
