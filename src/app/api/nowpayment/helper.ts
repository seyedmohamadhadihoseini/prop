import prisma from "@/services/singleton_prisma";

export async function GetChallengeById(id: number) {

    return await prisma.challenge.findUnique({
        where: { id }
    })
}

export async function FindFistMT5Account(settingId: number) {

    return await prisma.mT5Account.findFirst({
        where: {
            AND: [
                { isEnable: true },
                { isFree: true },
                { settingId }
            ]
        }
    })
}