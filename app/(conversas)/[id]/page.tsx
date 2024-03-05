import Avatar from "@/components/avatar";

export default async function Page({ params }: { params: { id: string } }) {
	return (
		<>
			<div className="basis-1/12 flex flex-row w-full gap-3 items-center">
				<Avatar />
				{/* <p>{(await conversas.getById(params.id)).titulo}</p> */}
			</div>
			<div className="basis-8/12 bg-slate-500 rounded mb-4">
				<ul className="p-4">
					{/* {(await mensagens.getByConversaId(params.id))?.map((mensagem) => (
						<li key={mensagem.id} className="flex flex-row gap-4 ">
							<div className="max-w-96 bg-slate-600 ring ring-slate-600 rounded-b-xl rounded-r-xl p-2">
								<p>{mensagem.texto}</p>
							</div>
						</li>
					))} */}
				</ul>
			</div>
			<div className="basis-3/12">
				<form action="">
					<fieldset className="flex items-center gap-4">
						<div className="basis-11/12">
							<label htmlFor="mensagem" className="hidden">
								Mensagem
							</label>
							<input
								type="text"
								name="mensagem"
								id="mensagem"
								className="w-full rounded size-10 bg-slate-500 p-3"
							/>
						</div>
						<div className="basis-1/12 flex justify-center">
							<button
								type="submit"
								className="bg-slate-600 ring ring-slate-600 rounded p-2 text-sm flex flex-row items-center gap-1">
								Enviar
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
							</button>
						</div>
					</fieldset>
				</form>
			</div>
		</>
	);
}
