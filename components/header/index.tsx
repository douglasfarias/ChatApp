import React from "react";
import localFont from "next/font/local";
import AuthService from "@/services/auth-service";
import { redirect, useSearchParams } from "next/navigation";
import { cookies } from "next/headers";

const kode = localFont({
	src: "../../public/font/KodeMono-VariableFont_wght.ttf",
});

const Header = () => {
	async function logout() {
		"use server";

		cookies().set({
			name: "Chat.Api",
			value: "",
			maxAge: 0,
		});
		redirect("/");
	}

	return (
		<div className="basis-full flex flex-row justify-between items-center my-3 py-3">
			<p className={`text-2xl font-bold ${kode.className}`}>NextChat</p>
			<form action={logout}>
				<button
					type="submit"
					className="hover:bg-slate-600 active:bg-slate-800 rounded p-3 flex flex-row items-center gap-1">
					Sair
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
						/>
					</svg>
				</button>
			</form>
		</div>
	);
};

export default Header;
