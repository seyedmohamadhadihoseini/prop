"use server";

import FormResultState from "@/lib/types/FormResultState";
import prisma from "@/services/singleton_prisma";

export default async function UpdateChallengeSetting(settingId: number, prevState: FormResultState, formData: FormData) {
    const name = formData.get("name") as string;
    const balance = parseInt(formData.get("balance") as string);
    const price = parseInt(formData.get("price") as string);
    const description = formData.get("description") as string;
    const isEnable = formData.has("is-enable");
    let success;
    let message = "successfully updated";
    try {
        await prisma.challengeSetting.update({
            where: {
                id: settingId
            },
            data: {
                name, balance, price, description, isEnable
            }
        })
        success = true;
    }
    catch (error) {
        message = `${error}`;
        success = false;
    }
    const result: FormResultState = {
        id: prevState.id + Math.random() + 1,
        success,
        message
    };
    return result;
}