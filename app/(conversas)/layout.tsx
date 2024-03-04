import Header from "@/components/header";
import Navbar from "@/components/navbar";
import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			<div className="grid grid-cols-12 gap-4 h-full">
				<Navbar />
				<main className="flex flex-col col-span-8 justify-center">{children}</main>
			</div>
		</>
	);
};

export default Layout;
