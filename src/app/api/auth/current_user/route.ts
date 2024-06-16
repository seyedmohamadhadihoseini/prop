import prisma from "@/services/singleton_prisma";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
    const sessionVal = request.nextUrl.searchParams.get("sessionId");
    if (sessionVal) {

        const session = await FindSession(sessionVal);
        if (session) {
            const user = await FindUser(session.userId);
            const res = Response.json({
                success: true,
                ...user
            });
            return res;
        }
        else{
            console.log("error to find user");
        }
    }

    return Response.json({
        success: false
    });
}
async function FindSession(sessionVal: string) {
    const session = await prisma.sessionSave.findUnique({
        where: {
            id: sessionVal
        }
    });
    return session;
}
async function FindUser(id: number) {
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    });
    return user;
}