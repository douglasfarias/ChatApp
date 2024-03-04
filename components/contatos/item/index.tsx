"use client";

import IConversa from "@/models/conversa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ListaDeConversasItem({ model }: { model: IConversa }) {
	const pathname = usePathname();

	const active = pathname === `/${model.id}` ? "bg-slate-600" : "hover:bg-slate-600";

	return (
		<li className="flex w-80">
			<Link
				href={`/${model.id}`}
				className={`flex flex-row w-full gap-3 p-3 items-center ${active} rounded`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-10 h-10 bg-slate-500 rounded-full p-2">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
					/>
				</svg>
				<p>{model.titulo}</p>
			</Link>
		</li>
	);
}
