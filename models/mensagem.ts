import IContato from "./contato";
import IConversa from "./conversa";

export default interface IMensagem {
	id: string;
	texto: string;
	conversa: IConversa;
	remetente: IContato;
	dataCriacao: Date;
	dataAtualizacao: Date;
}
