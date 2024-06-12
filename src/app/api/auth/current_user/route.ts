import prisma from "@/services/singleton_prisma";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
    const sessionVal = request.nextUrl.searchParams.get("sessionId");
    if (sessionVal) {
    
        const userId = await FindUserId(sessionVal);
        if (userId) {
            const user = await FindUser(userId);
            const res = Response.json({
                success: true,
                ...user
            });
            return res;
        }
    }

    return Response.json({
        success: false
    });
}
async function FindUserId(sessionVal: string) {
    const session = await prisma.sessionSave.findUnique({
        where: {
            id: sessionVal
        }
    });
    return session?.userId;
}
async function FindUser(id: number) {
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    });
    return user;
}