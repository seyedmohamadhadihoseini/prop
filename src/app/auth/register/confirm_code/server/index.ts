"use server";

import FormResultState from "@/lib/types/FormResultState";
import prisma from "@/services/singleton_prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function confirmCheck(prevState: FormResultState, formData:FormData) {
    const inputCode = Object.fromEntries(formData).confirm.toString();
    
    let result = false;
    const sessionId = cookies().get("sessionId__")?.value;
    if (sessionId) {
        const code = await FindCodeFromDb(sessionId);
        if (code === inputCode) {
            result = true;
        }
    }
    if (result) {

        return redirect("/auth/register/information");
    }
    else {
        const errorResult: FormResultState = {
            id: prevState.id + Math.random() + 1,
            success: false,
            message: "the code is not correct"
        }
        return errorResult;
    }
}
async function FindCodeFromDb(sessionId: string) {
    const sessionDb = await prisma.confirmCode.findUnique({
        where: {
            id: sessionId
        }
    })
    return sessionDb?.code;
}