export default interface IMensagem {
	id: string;
	texto: string;
	conversaId: string;
	remetenteId: string;
	dataCriacao: Date;
	dataAtualizacao: Date;
}
