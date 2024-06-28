"use server";

import prisma from "@/services/singleton_prisma";


export default async function GetOrders(status: "All" | "Paid" | "Pending") {
    let result;
    switch (status) {
        case "All":
            result = await prisma.challenge.findMany();
            break;

        case "Paid":
            result = await prisma.challenge.findMany({
                where: {
                    isPaid: true
                }
            })
            break;
        case "Pending":
            result = await prisma.challenge.findMany({
                where: {
                    isPaid: false,
                }
            })
            break;
    }
    return result;

}
export async function SearchByUser(preEmail: string) {
    const users = await prisma.user.findMany({
        where: {
            email: {
                startsWith:preEmail
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