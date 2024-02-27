import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const cookie = request.cookies.get("Chat.Api")?.value;

	if (!cookie) {
		return NextResponse.redirect(new URL("/account/login", request.url));
	}
}

export const config = {
	matcher: ["/", "/conversas/:path*"],
};
