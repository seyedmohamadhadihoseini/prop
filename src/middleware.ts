import { NextRequest, NextResponse } from "next/server";
import CurrentUser from "./functions/CurrentUser";
import AdminMiddleware from "./middleware/admin";

export default async function middleware(request: NextRequest) {

    const { pathname } = request.nextUrl;
    const isForApi = pathname.startsWith("/api");
    const isForAdmin = pathname.startsWith("/admin");
    if (isForAdmin) {
        return AdminMiddleware(request);
    }
    if (isForApi) {
        return;
    }
    const isToAuth: boolean = pathname.startsWith("/auth");
    const isToPanel: boolean = pathname.startsWith("/dashboard");
    const isToHome: boolean = pathname.endsWith("/");

    const user = await CurrentUser();
    let isUserExist = false;

    if (user) {

        isUserExist = true;
    }


    if ((isToAuth || isToHome) && isUserExist) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    else if ((isToPanel || isToHome) && (!isUserExist)) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
}
