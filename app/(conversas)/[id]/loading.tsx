const Loading = () => {
	return (
		<>
			<div className="basis-1/12 flex flex-row w-full gap-3 items-center animate-pulse">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-10 h-10 bg-slate-500 rounded-full p-2 animate-pulse">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
					/>
				</svg>
			</div>
			<div className="basis-8/12 bg-slate-500 rounded mb-4 animate-pulse"></div>
			<div className="basis-3/12 animate-pulse flex-nowrap">
				<div className="basis-11/12 w-full rounded size-10 bg-slate-500 animate-pulse"></div>
			</div>
		</>
	);
};

export default Loading;
