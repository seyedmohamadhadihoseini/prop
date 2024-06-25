"use server"

import prisma from "@/services/singleton_prisma"

export default async function GetChallenges() {
    return await prisma.challengeSetting.findMany();
}