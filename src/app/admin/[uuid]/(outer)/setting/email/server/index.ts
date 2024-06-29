"use server";

import prisma from "@/services/singleton_prisma";


export default async function EmailConfigurationSave(formData: FormData) {
    const host = formData.get("host") as string;
    const port = parseInt(formData.get("port") as string);
    const user = formData.get("user") as string;
    const password = formData.get("password") as string;

    if (await prisma.mailConfiguration.count() > 0) {
        await prisma.mailConfiguration.update({
            where: {
                id: 0
            },
            data: {
                host, port, user, pass: password
            }
        })
    }
    else {
        await prisma.mailConfiguration.create({
            data: {
                host, port, pass: password, user
            }
        })
    }
}