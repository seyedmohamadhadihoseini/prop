import { NextRequest, NextResponse } from "next/server";
import CurrentUser from "./functions/CurrentUser";

export default async function middleware(request: NextRequest){

    const {pathname} = request.nextUrl;
    const isForApi = pathname.startsWith("/api");
    if(isForApi){
        return;
    } 
    const isToAuth:boolean = pathname.startsWith("/auth");
    const isToPanel:boolean = pathname.startsWith("/dashboard");

    const user = await CurrentUser();
    let isUserExist = false;
    if(user){
        
        isUserExist = true;
    } 
    

    if(isToAuth && isUserExist){
        return NextResponse.redirect(new URL("/dashboard",request.url));
    }
    else if(isToPanel && (!isUserExist)){
        return NextResponse.redirect(new URL("/auth/login",request.url));
    }
}