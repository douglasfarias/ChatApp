import Spinner from "@/components/spinner";
import SubmitButton from "@/components/submit-button";
import Link from "next/link";
import { useFormStatus } from "react-dom";

type State = {
	message?: string;
};

type Props = {
	onSubmit: (payload: FormData) => void;
	state: State | undefined;
};

const LoginForm = ({ onSubmit, state }: Props) => {
	return (
		<form id="loginForm" action={onSubmit}>
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
					<SubmitButton />
					<Link href="/account/register">Cadastrar-se</Link>
				</div>
			</fieldset>
		</form>
	);
};

export default LoginForm;
