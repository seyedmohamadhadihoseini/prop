"use server";

import prisma from "@/services/singleton_prisma";

export default async function GetChallenges(skip: number, take: number) {
    return await prisma.challenge.findMany({
        skip, take,include:{
            setting:true,user:true
        }
    })
}
