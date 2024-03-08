import { useFormStatus } from "react-dom";
import Spinner from "../spinner";
import { PropsWithChildren } from "react";

const SubmitButton = ({ children }: PropsWithChildren) => {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			disabled={pending}
			className="bg-slate-600 hover:bg-slate-700 active:bg-slate-800 disabled:bg-slate-900 ring ring-slate-600 rounded p-2 text-sm flex flex-row items-center gap-1">
			Enviar
			{pending ? <Spinner visible={pending} /> : children}
		</button>
	);
};
export default SubmitButton;
