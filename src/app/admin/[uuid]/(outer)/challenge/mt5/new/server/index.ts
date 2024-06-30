"use server";

import FormResultState from "@/lib/types/FormResultState";
import prisma from "@/services/singleton_prisma";

export default async function SaveNewMt5Account(prevState: FormResultState, formData: FormData) {

    const accNo = formData.get("acc-no") as string;
    const accPass = formData.get("acc-pass") as string;
    const setting = formData.get("setting") as string;
    const server = formData.get("acc-server") as string;
    let result;
    let message = "successfully added";
    try {

        await prisma.mT5Account.create({
            data: {
                accountNumber: accNo, server,
                password: accPass, settingId: parseInt(setting)
            }
        })
        result = true;
    }
    catch (error) {
        result = false;
        message = `${error}`;
    }

    return {
        id: prevState.id + Math.random() + 1,
        message,
        success: result
    }
}
export async function GetAllChallengeSetting() {
    return await prisma.challengeSetting.findMany();
}