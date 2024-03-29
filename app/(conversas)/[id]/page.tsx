"use client";

import { useAppSelector } from "../../../lib/hooks";
import Avatar from "@/components/avatar";
import HttpClient from "@/data/http-client";
import IConversa from "@/models/conversa";
import ConversasService from "@/services/conversas-service";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { enviar } from "./actions";
import SubmitButton from "@/components/submit-button";
import MensagensService from "@/services/mensagens-service";
import IMensagem from "@/models/mensagem";

export default function Page({ params }: { params: { id: string } }) {
	const [conversa, setConversa] = useState<IConversa>();
	const [mensagens, setMensagens] = useState<IMensagem[]>();

	const { isAuthenticated, user } = useAppSelector((state) => state.auth);
	useEffect(() => {
		if (!isAuthenticated) {
			return;
		}

		(async function () {
			const http = HttpClient.getInstance(user?.token!);
			setConversa(await new ConversasService(http).getById(params.id));
			setMensagens(await new MensagensService(http).getByConversaId(params.id));
		})();
	}, [isAuthenticated, params.id, user]);

	const [state, formAction] = useFormState(enviar, undefined);

	return (
		<>
			<div className="basis-1/12 flex flex-row w-full gap-3 items-center">
				<Avatar />
				<p>{conversa?.titulo}</p>
			</div>
			<div className="basis-8/12 bg-slate-500 rounded mb-4">
				<ul className="p-4">
					{mensagens?.map((mensagem) => (
						<li
							key={mensagem.id}
							className={`flex  ${
								mensagem.remetenteId === conversa?.contatoId
									? "flex-row"
									: "flex-row-reverse"
							} gap-4`}>
							<div className="max-w-96 bg-slate-600 ring ring-slate-600 rounded-b-xl rounded-r-xl p-2">
								<p>{mensagem.texto}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className="basis-3/12">
				<form action={formAction}>
					<fieldset className="flex items-center gap-4">
						<div className="basis-11/12">
							<label htmlFor="mensagem" className="hidden">
								Mensagem
							</label>
							<input type="hidden" name="conversa" value={conversa?.id} />
							<input
								type="text"
								name="mensagem"
								id="mensagem"
								className="w-full rounded size-10 bg-slate-500 p-3"
							/>
						</div>
						<div className="basis-1/12 flex justify-center">
							<SubmitButton>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
									/>
								</svg>
							</SubmitButton>
						</div>
					</fieldset>
				</form>
			</div>
		</>
	);
}
