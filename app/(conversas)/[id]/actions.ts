"use server";

import CreateMensagemCommand from "@/commands/CreateMensagemCommand";
import HttpClient from "@/data/http-client";
import ProblemDetails from "@/models/problem-details";
import MensagensService from "@/services/mensagens-service";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

export async function enviar(prevState: any, formData: FormData) {
	const mensagem = {
		texto: formData.get("mensagem") as string,
		conversaId: formData.get("conversa") as string,
	} as CreateMensagemCommand;

	try {
		const token = cookies().get("Chat.Api")?.value;
		const http = HttpClient.getInstance(token);
		const response = await new MensagensService(http).create(mensagem);
		return response;
	} catch (error) {
		return { message: (error as AxiosError<ProblemDetails>).response?.data.title };
	}
}
