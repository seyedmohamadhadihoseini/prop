"use server";

import prisma from "@/services/singleton_prisma";
import { User } from "@prisma/client";

export default async function referralSummary(user: User) {
    const users = await prisma.user.findMany({
        where: {
            parentReferralCode: user.referralCode
        }, include: {
            Challenge: {
                where: {
                    isPaid: true
                }, include: {
                    setting: true
                }
            }
        }
    });
    let AllCount = 0; let AllPrice = 0;
    for (let i = 0; i < users.length; ++i) {
        for (let j = 0; j < users[i].Challenge.length; ++j) {
            AllCount += 1;
            AllPrice += users[i].Challenge[j].setting.price;
        }
    }

    return {AllCount, AllPrice}
}