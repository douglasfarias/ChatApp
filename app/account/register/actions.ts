"use server";

import HttpClient from "@/data/http-client";
import ProblemDetails from "@/models/problem-details";
import AuthService from "@/services/auth-service";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";

export async function register(prevState: any, formData: FormData) {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	const confirmPassword = formData.get("confirmPassword") as string;

	if (password !== confirmPassword) {
		return { message: "As senhas não conferem" };
	}

	try {
		const httpClient = HttpClient.getInstance();
		await new AuthService(httpClient).register(email, password);
	} catch (error) {
		return { message: (error as AxiosError<ProblemDetails>).response?.data.title };
	}

	redirect("/account/login");
}
