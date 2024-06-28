"use server";

import prisma from "@/services/singleton_prisma";

export default async function GetAllUser(take: number, skip: number) {
    return await prisma.user.findMany({
        take, skip
    });
}