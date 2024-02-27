import React, { PropsWithChildren } from "react";
import Header from "../header";
import Navbar from "../navbar";

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			<div className="grid grid-cols-12 gap-4 h-full">
				<Navbar />
				{children}
			</div>
		</>
	);
};

export default Layout;
