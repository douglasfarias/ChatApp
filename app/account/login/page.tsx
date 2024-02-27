import localFont from "next/font/local";

import AuthService from "@/services/auth-service";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { cookies } from "next/headers";
import PublicLayout from "@/components/public-layout";

const kode = localFont({
	src: "../../../public/font/KodeMono-VariableFont_wght.ttf",
});

const Page = () => {
	async function onSubmit(formData: FormData) {
		"use server";

		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const response = await AuthService.login(email, password);
		cookies().set({
			name: "Chat.Api",
			value: response.accessToken,
			maxAge: response.expiresIn,
		});

		redirect("/");
	}

	return (
		<PublicLayout>
			<div className="col-span-12 flex flex-col items-center justify-center h-screen w-full">
				<p className={`text-4xl font-bold mb-10 ${kode.className}`}>NextChat</p>
				<form action={onSubmit}>
					<legend className="text-xl my-3 font-bold">Entrar</legend>
					<fieldset>
						<div className="my-3">
							<label>Email</label>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								className="w-full rounded size-10 bg-slate-500 p-3"
							/>
						</div>
						<div className="my-3">
							<label>Senha</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="password"
								className="w-full rounded size-10 bg-slate-500 p-3"
							/>
						</div>
						<div className="my-6 flex justify-between items-center">
							<button
								type="submit"
								className="bg-slate-600 ring ring-slate-600 rounded p-2 text-sm flex flex-row items-center gap-1">
								Entrar
							</button>
							<Link href="/">Cadastrar-se</Link>
						</div>
					</fieldset>
				</form>
			</div>
		</PublicLayout>
	);
};
export default Page;
