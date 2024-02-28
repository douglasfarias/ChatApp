"use server";

import AuthService from "@/services/auth-service";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { AxiosError } from "axios";
import ProblemDetails from "@/models/problem-details";
import HttpClient from "@/data/http-client";

export async function login(prevState: any, formData: FormData) {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	try {
		const httpClient = HttpClient.getInstance();
		const { accessToken, expiresIn } = await new AuthService(httpClient).login(email, password);
		cookies().set({
			name: "Chat.Api",
			value: accessToken,
			maxAge: expiresIn,
		});
	} catch (error) {
		return { message: (error as AxiosError<ProblemDetails>).response?.data.title };
	}

	redirect("/");
}
