"use server";

import prisma from "@/services/singleton_prisma";


export default async function GetFreeMT5Accounts() {

    return await prisma.mT5Account.findMany({
        where: {
            isFree: true
        },include:{
            setting:true
        }
    })

}
export async function GetChallengeSettingById(id: number) {
    return await prisma.challengeSetting.findUnique({
        where: {
            id
        }
    })
}