import prisma from "@/services/singleton_prisma";
import { randomUUID } from "crypto";
import { cookies } from "next/headers";

export default async function GrantSession(userId:number) {
    if (process.env.PUBLIC_NEXT_SESSION_NAME) {
        const sessionId = randomUUID();
        cookies().set(process.env.PUBLIC_NEXT_SESSION_NAME, sessionId,{secure:true,httpOnly:true})
        await prisma.sessionSave.create({
            data:{
                id:sessionId,userId
            }
        });
    }
}