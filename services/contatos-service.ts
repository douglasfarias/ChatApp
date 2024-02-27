import IContato from "@/models/contato";
import axios from "axios";

const BASE_URL = `${process.env.API}/api/contatos`;
class ContatoService {
	public static async getAll(): Promise<IContato[]> {
		const response = await axios.get(BASE_URL);
		return response.data;
	}

	public static async getById(id: string): Promise<IContato> {
		const response = await axios.get(`${BASE_URL}/${id}`);
		return response.data;
	}

	public static async create(contato: IContato): Promise<IContato> {
		const response = await axios.post(BASE_URL, contato);
		return response.data;
	}

	public static async update(contato: IContato): Promise<IContato> {
		const response = await axios.put(`${BASE_URL}/${contato.id}`, contato);
		return response.data;
	}

	public static async delete(id: string): Promise<void> {
		await axios.delete(`${BASE_URL}/${id}`);
	}
}

export default ContatoService;
