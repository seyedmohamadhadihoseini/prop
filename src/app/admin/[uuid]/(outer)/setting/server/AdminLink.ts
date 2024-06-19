"use server";

import prisma from "@/services/singleton_prisma";
import { randomUUID } from "crypto";

export default async function GenereteNewAdminLink(currentUuid: string) {
    const newUuid = randomUUID();
    await prisma.admin.update({
        where: {
            uuid: currentUuid
        },
        data: {
            uuid: newUuid
        }
    })
    return newUuid;
}