"use server";

import AuthService from "@/services/auth-service";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { AxiosError } from "axios";
import ProblemDetails from "@/models/problem-details";

export async function onSubmit(prevState: any, formData: FormData) {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	try {
		const { accessToken, expiresIn } = await AuthService.login(email, password);
		cookies().set({
			name: "Chat.Api",
			value: accessToken,
			maxAge: expiresIn,
		});
		redirect("/");
	} catch (error) {
		return { message: (error as AxiosError<ProblemDetails>).response?.data.title };
	}
}
