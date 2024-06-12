import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";


export function GET(req: NextRequest) {
    let success = false;
    if (process.env.PUBLIC_NEXT_SESSION_NAME)
        if (cookies().has(process.env.PUBLIC_NEXT_SESSION_NAME)) {
            cookies().delete(process.env.PUBLIC_NEXT_SESSION_NAME)
            success = true;
        }

    return redirect("/auth/login");
}