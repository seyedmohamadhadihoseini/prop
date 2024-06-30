"use server"

import prisma from "@/services/singleton_prisma";

export default async function NowPaymentConfigurationSave(formData: FormData) {
    const apiKey = formData.get("now-api-key") as string;
    const ipnKey = formData.get("now-ipn-key") as string;
    const publicKey = formData.get("now-public-key") as string;

    const count = await prisma.nowPaymentConfig.count({
        where: {
            apiKey
        }
    })
    if (count == 0) {
        await prisma.nowPaymentConfig.create({
            data: {
                apiKey, ipnKey, publicKey
            }
        })
    } else {
        await prisma.nowPaymentConfig.update({
            where: {
                apiKey
            }, data: {
                ipnKey, apiKey, publicKey
            }
        })
    }
}