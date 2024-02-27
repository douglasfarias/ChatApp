"use server";

import AuthService from "@/services/auth-service";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function onSubmit(prevState: any, formData: FormData) {
	let shouldRedirect = true;
	try {
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const response = await AuthService.login(email, password);
		cookies().set({
			name: "Chat.Api",
			value: response.accessToken,
			maxAge: response.expiresIn,
		});
	} catch (error) {
		shouldRedirect = false;
		return { message: (error as Error).message };
	} finally {
		if (shouldRedirect) {
			redirect("/");
		}
	}
}
