import { IAuthToken } from "@/models/auth-token";
import ProblemDetails from "@/models/problem-details";
import axios from "axios";

const BASE_URL = `${process.env.API}`;

class AuthService {
	public static async register(email: string, password: string): Promise<void> {
		await axios.post(`${BASE_URL}/register`, { email, password });
	}

	public static async login(email: string, password: string): Promise<IAuthToken> {
		const response = await axios.post(`${BASE_URL}/login`, { email, password });
		return response.data;
	}
}

export default AuthService;
