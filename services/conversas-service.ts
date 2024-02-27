import IConversa from "@/models/conversa";
import axios from "axios";

const BASE_URL = `${process.env.API}/api/conversas`;
class ConversasService {
	public static async getAll(): Promise<IConversa[]> {
		const response = await axios.get<IConversa[]>(BASE_URL);
		return response.data;
	}

	public static async getById(id: string): Promise<IConversa> {
		const response = await axios.get<IConversa>(`${BASE_URL}/${id}`);
		return response.data;
	}

	public static async create(conversa: IConversa): Promise<IConversa> {
		const response = await axios.post<IConversa>(BASE_URL, conversa);
		return response.data;
	}

	public static async update(id: string, conversa: IConversa): Promise<IConversa> {
		const response = await axios.put<IConversa>(`${BASE_URL}/${id}`, conversa);
		return response.data;
	}

	public static async delete(id: string): Promise<void> {
		await axios.delete(`${BASE_URL}/${id}`);
	}
}

export default ConversasService;
