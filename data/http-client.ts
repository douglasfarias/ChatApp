import axios, { AxiosInstance } from "axios";

class HttpClient {
	private static axios: AxiosInstance;
	private constructor() {}

	public static getInstance(accessToken?: string): AxiosInstance {
		if (!HttpClient.axios) {
			HttpClient.axios = axios.create({
				baseURL: process.env.API,
				headers: {
					common: {
						Authorization: `Bearer ${accessToken}`,
					},
				},
			});
		}
		return HttpClient.axios;
	}
}

export default HttpClient;
