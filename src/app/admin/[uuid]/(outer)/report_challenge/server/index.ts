"use server";

import prisma from "@/services/singleton_prisma";
import { Challenge } from "@prisma/client";

export default async function GetChallenges(skip: number, take: number) {
    return await prisma.challenge.findMany({
        skip, take
    })
}
export async function SearchUser(preEmail: string) {
    const users = await prisma.user.findMany({
        where: {
            email: {
                startsWith:preEmail
            }
        }
    });
    const challenges = [];

    for (let i = 0; i < users.length; ++i) {
        const chs = await prisma.challenge.findMany({
            where: {
                userId: users[i].id
            }
        })
        challenges.push(...chs);
    }
    return challenges;
}