import { IAuthToken } from "@/models/auth-token";
import ProblemDetails from "@/models/problem-details";
import axios from "axios";

const BASE_URL = `${process.env.API}`;

class AuthService {
	public static async login(email: string, password: string): Promise<IAuthToken> {
		try {
			const response = await axios.post(`${BASE_URL}/login`, { email, password });
			return response.data;
		} catch (error) {
			const problem = (error as any).response.data as ProblemDetails;
			throw new Error(`${problem.title} - ${problem.detail}`);
		}
	}
}

export default AuthService;
