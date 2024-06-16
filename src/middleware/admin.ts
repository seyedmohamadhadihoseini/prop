import { NextRequest, NextResponse } from "next/server";

export default async function AdminMiddleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    const uuid = pathname.split("/")[2];
    let result = false;
    if (uuid) {
        try {
            const isAdmin = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/admin?uuid=${uuid}`);
            result = JSON.parse(await isAdmin.text()).result;
        }
        catch {
            result = false;
        }
    }
    if (result)
        return;
    return NextResponse.redirect(new URL("/auth/login", req.url));
}