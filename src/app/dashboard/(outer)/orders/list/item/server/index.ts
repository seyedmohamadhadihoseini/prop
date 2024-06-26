"use server";

import prisma from "@/services/singleton_prisma";

export default async function GetChallengeSetting(settingId: number) {
    const result =  await prisma.challengeSetting.findUnique({
        where: {
            id: settingId
        }
    });

    return result;
}