import IMensagem from "@/models/mensagem";
import axios from "axios";

const BASE_URL = `${process.env.API}/api/mensagens`;
class MensagensService {
	public static async create(mensagem: IMensagem): Promise<IMensagem> {
		const response = await axios.post(BASE_URL, mensagem);
		return response.data;
	}

	public static async get(id: string): Promise<IMensagem> {
		const response = await axios.get(`${BASE_URL}/${id}`);
		return response.data;
	}

	public static async getByConversaId(id: string): Promise<IMensagem[]> {
		const response = await axios.get(`${BASE_URL}/conversa/${id}`);
		return response.data;
	}

	public static async update(id: string, mensagem: IMensagem): Promise<IMensagem> {
		const response = await axios.put(`${BASE_URL}/${id}`, mensagem);
		return response.data;
	}

	public static async delete(id: string): Promise<void> {
		await axios.delete(`${BASE_URL}/${id}`);
	}
}

export default MensagensService;
