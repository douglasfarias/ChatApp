import { IAuthToken } from "@/models/auth-token";
import axios from "axios";

const BASE_URL = `${process.env.API}`;

class AuthService {
	public static async login(email: string, password: string): Promise<IAuthToken> {
		const response = await axios.post(`${BASE_URL}/login`, { email, password });
		console.log(response);

		return response.data;
	}
}

export default AuthService;
