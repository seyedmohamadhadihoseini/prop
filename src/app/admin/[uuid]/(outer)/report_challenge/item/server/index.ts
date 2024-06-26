"use server";

import prisma from "@/services/singleton_prisma";

export async function GetChallengeSetting(settingId: number) {
    return await prisma.challengeSetting.findUnique({
        where: {
            id: settingId
        }
    });
}
export async function GetUser(userId: number) {
    return await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
}