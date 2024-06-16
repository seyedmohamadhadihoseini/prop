"use server";

import prisma from "@/services/singleton_prisma";

export default async function GetUsers(skip: number, take: number) {
    const usersList = await prisma.user.findMany({
        skip, take
    });
    return usersList;
}