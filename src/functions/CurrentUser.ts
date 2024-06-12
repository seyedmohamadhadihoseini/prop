import prisma from "@/services/singleton_prisma";
import { Delete } from "@mui/icons-material";
import { cookies } from "next/headers";
const sessionPair: { [key: string]: any } = {};
export default async function CurrentUser() {
    const sessionId = cookies().get(process.env.PUBLIC_NEXT_SESSION_NAME || "")?.value;

    if (sessionId) {
            if (sessionPair[sessionId]) {
                return sessionPair[sessionId];
            }
        const response = await fetch(`${process.env.PUBLIC_NEXT_HOST}/api/auth/current_user?sessionId=${sessionId}`, { cache: "force-cache" });
        const user = JSON.parse(await response.text());
        if (sessionId) {
            sessionPair[sessionId] = user;
        }
        if (user.success) {
            return user;
        }
    }
    return null;
}
export async function GetUserWithoutCache() {
    const sessionId = cookies().get(process.env.PUBLIC_NEXT_SESSION_NAME || "")?.value;
    if(sessionId){
        const session = await prisma.sessionSave.findUnique({
            where:{
                id:sessionId
            }
        })
        if(session){
            const user = await prisma.user.findUnique({
                where:{
                    id:session.userId
                }
            })
            return user;
        }
    }
    return null;
}