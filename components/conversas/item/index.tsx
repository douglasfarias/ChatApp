"use client";

import Avatar from "@/components/avatar";
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
				<Avatar />
				<p>{model.titulo}</p>
			</Link>
		</li>
	);
}
