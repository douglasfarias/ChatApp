import { IAuthToken } from "@/models/auth-token";
import { AxiosInstance } from "axios";

class AuthService {
	private httpClient: AxiosInstance;
	constructor(httpClient: AxiosInstance) {
		this.httpClient = httpClient;
	}
	public async register(email: string, password: string): Promise<void> {
		await this.httpClient.post(`/register`, { email, password });
	}

	public async login(email: string, password: string): Promise<IAuthToken> {
		const response = await this.httpClient.post(`/login`, { email, password });
		return response.data;
	}
}

export default AuthService;
