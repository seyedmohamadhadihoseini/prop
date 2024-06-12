"use server";
import FormResultState from "@/lib/types/FormResultState";
import prisma from "@/services/singleton_prisma";

export default async function ActionForResetPassword(email: string, prevState: FormResultState, formData: FormData) {
    const password = formData.get("password")?.toString();
    const confirm_password = formData.get("cpassword")?.toString();

    let result = false;
    if (password && confirm_password) {
        if (password === confirm_password) {
            result = true;
            await ChangePasswordDb(email, password);
        }
    }

    return {
        id: prevState.id + Math.random() + 1,
        success: result,
        message: result ? "password change successfully" : "passwords are not same"
    }
}
async function ChangePasswordDb(email: string, password: string) {
    await prisma.user.update({
        where: {
            email
        },
        data: {
            password
        }
    })
}