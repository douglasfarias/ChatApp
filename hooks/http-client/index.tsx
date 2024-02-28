import HttpClient from "@/data/http-client";
import { cookies } from "next/headers";

function useHttpClient() {
	return HttpClient.getInstance(cookies().get("Chat.Api")?.value || "");
}

export default useHttpClient;
