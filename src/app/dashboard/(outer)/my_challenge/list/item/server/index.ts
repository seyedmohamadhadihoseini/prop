"use server";

import prisma from "@/services/singleton_prisma";
import { Challenge } from "@prisma/client";

export default async function AssignMT5(challenge: Challenge) {
    const setting = await prisma.challengeSetting.findUnique({
        where: {
            id: challenge.settingId
        }
    });

    const acc = await prisma.mT5Account.findFirst({
        where: {
            AND: [
                { isEnable: true },
                { isFree: true },
                { settingId: setting?.id }
            ]
        }
    })
    if (!acc) {
        return null;
    }
    await prisma.challenge.update({
        where: {
            id: challenge.id
        }, data: {
            MT5: acc.accountNumber
        }
    });
    await prisma.mT5Account.update({
        where:{
            accountNumber:acc.accountNumber
        },data:{
            isFree:false
        }
    })
    return acc;

}
export async function GetMT5Account(accountNumber: number) {

    return await prisma.mT5Account.findUnique({
        where: {
            accountNumber
        }
    })
}