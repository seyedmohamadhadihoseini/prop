"use server";

import prisma from "@/services/singleton_prisma";


export async function SearchByUser(preEmail: string) {
    const users = await prisma.user.findMany({
        where: {
            email: {
                startsWith: preEmail
            }
        }
    });
    const orders = [];

    for (let i = 0; i < users.length; ++i) {
        const chs = await prisma.challenge.findMany({
            where: {
                userId: users[i].id
            }
        })
        orders.push(...chs);
    }
    return orders;
}