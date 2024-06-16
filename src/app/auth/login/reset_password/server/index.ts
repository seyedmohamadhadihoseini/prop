"use server";

import FormResultState from "@/lib/types/FormResultState";
import SendMail from "@/services/email";
import prisma from "@/services/singleton_prisma";
import { Cryptr_Encrypt } from "@/services/cryptr";
export default async function SendResetPassword(prevState: FormResultState, formData: FormData) {

    const email = formData.get("email")?.toString();
    if (email) {
        const isUserExist = await CheckUser(email);
        if (isUserExist) {
            const encEmail = Cryptr_Encrypt(email);
            SendMail(email, "Reset Password", `
            <div>
            <p>
            hi,we receive an request to reset your password
            </p>
            <p>use <a href="${process.env.NEXT_PUBLIC_HOST}/auth/login/reset_password/${encEmail}">this</a> link to do it . </p>
            
            </div>
            `)
        }
    }
    return {
        id: prevState.id + Math.random() + 1,
        success: true,
        message: "email sent. check your mail box"
    }
}
async function CheckUser(email: string) {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })
    let result = false;
    if (user) {
        result = true;
    }
    return result;
}