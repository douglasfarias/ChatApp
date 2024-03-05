import HttpClient from "@/data/http-client";

function useHttpClient({ token }: { token?: string }) {
	return HttpClient.getInstance(token);
}

export default useHttpClient;
