import Link from "next/link";

type State = {
	message: string;
};

type Props = {
	onSubmit: (payload: FormData) => void;
	state: State | undefined;
};

const LoginForm = ({ onSubmit, state }: Props) => {
	return (
		<form id="loginForm" action={onSubmit}>
			<legend className="text-xl my-3 font-bold">Entrar</legend>
			{state?.message && (
				<div className="bg-red-500 text-white p-3 rounded my-3">{state.message}</div>
			)}
			<fieldset id="loginFormFieldset">
				<div className="my-3">
					<label>Email</label>
					<input
						id="email"
						name="email"
						type="email"
						autoComplete="email"
						className="w-full rounded size-10 bg-slate-500 p-3"
					/>
				</div>
				<div className="my-3">
					<label>Senha</label>
					<input
						id="password"
						name="password"
						type="password"
						autoComplete="password"
						className="w-full rounded size-10 bg-slate-500 p-3"
					/>
				</div>
				<div className="my-6 flex justify-between items-center">
					<button
						type="submit"
						className="bg-slate-600 ring ring-slate-600 rounded p-2 text-sm flex flex-row items-center gap-1">
						Entrar
					</button>
					<Link href="/">Cadastrar-se</Link>
				</div>
			</fieldset>
		</form>
	);
};

export default LoginForm;
