import IContato from "@/models/contato";
import { AxiosInstance } from "axios";

class ContatoService {
	private httpClient: AxiosInstance;
	constructor(httpClient: AxiosInstance) {
		this.httpClient = httpClient;
	}

	public async getAll(): Promise<IContato[]> {
		const response = await this.httpClient.get(`/api/contatos`);
		return response.data;
	}

	public async getById(id: string): Promise<IContato> {
		const response = await this.httpClient.get(`${`/api/contatos`}/${id}`);
		return response.data;
	}

	public async create(contato: IContato): Promise<IContato> {
		const response = await this.httpClient.post(`/api/contatos`, contato);
		return response.data;
	}

	public async update(contato: IContato): Promise<IContato> {
		const response = await this.httpClient.put(`${`/api/contatos`}/${contato.id}`, contato);
		return response.data;
	}

	public async delete(id: string): Promise<void> {
		await this.httpClient.delete(`${`/api/contatos`}/${id}`);
	}
}

export default ContatoService;
