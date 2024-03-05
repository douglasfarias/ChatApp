import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import StoreProvider from "@/components/store-provider";
import useHttpClient from "@/hooks/http-client";
import ConversasService from "@/services/conversas-service";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NextChat",
	description: "Your next chat app",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const token = cookies().get("Chat.Api")?.value ?? undefined;
	const http = useHttpClient({ token });
	const conversas = token ? await new ConversasService(http).getAll() : [];

	return (
		<html lang="en">
			<body className={`${inter.className} container mx-auto h-screen overflow-hidden`}>
				<StoreProvider conversas={conversas}>{children}</StoreProvider>
			</body>
		</html>
	);
}
