"use server";

import CurrentUser from "@/functions/CurrentUser";
import prisma from "@/services/singleton_prisma";
import { User } from "@prisma/client";


export default async function GetOrders(status: "All" | "Paid" | "Pending") {
    const user: User = await CurrentUser();
    let result;
    switch (status) {
        case "All":
            result = await prisma.challenge.findMany({
                where: { userId: user.id }
            });
            break;

        case "Paid":
            result = await prisma.challenge.findMany({
                where: {
                    AND: [
                        { isPaid: true },
                        { userId: user.id }
                    ]
                }
            })
            break;
        case "Pending":
            result = await prisma.challenge.findMany({
                where: {
                    AND: [
                        { isPaid: false },
                        { userId: user.id }
                    ]
                }
            })
            break;
    }
    return result;

}