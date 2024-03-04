import Avatar from "@/components/avatar";

const Loading = () => {
	return (
		<>
			<div className="basis-1/12 flex flex-row w-full gap-3 items-center animate-pulse">
				<Avatar />
			</div>
			<div className="basis-8/12 bg-slate-500 rounded mb-4 animate-pulse"></div>
			<div className="basis-3/12 animate-pulse flex-nowrap">
				<div className="basis-11/12 w-full rounded size-10 bg-slate-500 animate-pulse"></div>
			</div>
		</>
	);
};

export default Loading;
