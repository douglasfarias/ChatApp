"use client";

import localFont from "next/font/local";
import { onSubmit } from "./actions";
import Link from "next/link";
import React, { useState } from "react";
import PublicLayout from "@/components/public-layout";
import { useFormState } from "react-dom";
import Spinner from "@/components/spinner";
import LoginForm from "@/components/account/login-form";

const kode = localFont({
	src: "../../../public/font/KodeMono-VariableFont_wght.ttf",
});

const Page = () => {
	const [state, formAction] = useFormState(onSubmit, undefined);
	const [loading, setLoading] = useState(false);

	const submit = (data: FormData) => {
		try {
			setLoading(true);
			formAction(data);
		} finally {
			setLoading(false);
		}
	};

	return (
		<PublicLayout>
			<div className="col-span-12 flex flex-col items-center justify-center h-screen w-full">
				<p className={`text-4xl font-bold mb-10 ${kode.className}`}>NextChat</p>
				<LoginForm state={state} onSubmit={submit} />
				<Spinner visible={loading} />
			</div>
		</PublicLayout>
	);
};
export default Page;
