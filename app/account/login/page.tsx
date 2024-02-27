"use client";

import localFont from "next/font/local";
import { login } from "./actions";
import React, { useState } from "react";
import PublicLayout from "@/components/public-layout";
import { useFormState } from "react-dom";
import LoginForm from "@/components/account/login-form";

const kode = localFont({
	src: "../../../public/font/KodeMono-VariableFont_wght.ttf",
});

const Page = () => {
	const [state, formAction] = useFormState(login, undefined);

	return (
		<PublicLayout>
			<div className="col-span-12 flex flex-col items-center justify-center h-screen w-full">
				<p className={`text-4xl font-bold mb-10 ${kode.className}`}>NextChat</p>
				<p className="text-xl my-3 font-bold">Entrar</p>
				<LoginForm state={state} onSubmit={formAction} />
			</div>
		</PublicLayout>
	);
};
export default Page;
