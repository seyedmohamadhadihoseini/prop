"use server";

import prisma from "@/services/singleton_prisma";
import { VerifySteps } from "@prisma/client";

export default async function DetermineUserVerfication(userId: number, newVerificationLevel: VerifySteps) {

    await prisma.user.update({
        where: {
            id: userId
        },

        data: {
            verifyLevel: newVerificationLevel
        }
    })
}