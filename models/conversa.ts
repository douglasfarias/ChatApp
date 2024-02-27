import IContato from "./contato";
import IMensagem from "./mensagem";

export default interface IConversa {
	id: string;
	contato: IContato;
	titulo: string;
	mensagens: IMensagem[];
	dataCriacao: Date;
	dataAtualizacao: Date;
}
