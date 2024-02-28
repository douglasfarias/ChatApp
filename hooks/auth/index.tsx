import useHttpClient from "../http-client";
import AuthService from "@/services/auth-service";

function useAuth() {
	const httpClient = useHttpClient();
	return new AuthService(httpClient);
}

export default useAuth;
