"use client";

import localFont from "next/font/local";
import { onSubmit } from "./actions";
import Link from "next/link";
import React, { useState } from "react";
import PublicLayout from "@/components/public-layout";
import { useFormState } from "react-dom";

const kode = localFont({
	src: "../../../public/font/KodeMono-VariableFont_wght.ttf",
});

const Page = () => {
	const [state, formAction] = useFormState(onSubmit, {} as { message: string });

	return (
		<PublicLayout>
			<div className="col-span-12 flex flex-col items-center justify-center h-screen w-full">
				<p className={`text-4xl font-bold mb-10 ${kode.className}`}>NextChat</p>
				<form action={formAction}>
					<legend className="text-xl my-3 font-bold">Entrar</legend>
					{state?.message && (
						<div className="bg-red-500 text-white p-3 rounded my-3">
							{state.message}
						</div>
					)}
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
