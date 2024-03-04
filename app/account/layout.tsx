import React, { PropsWithChildren } from "react";

const PublicLayout = ({ children }: PropsWithChildren) => {
	return <div className="grid grid-cols-12 gap-4 h-full">{children}</div>;
};

export default PublicLayout;
