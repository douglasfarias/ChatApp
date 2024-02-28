import axios from "axios";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const token = request.cookies.get("Chat.Api")?.value;
	if (!token) {
		return NextResponse.redirect(new URL("/account/login", request.url));
	}
}

export const config = {
	matcher: ["/", "/conversas/:path*"],
};
