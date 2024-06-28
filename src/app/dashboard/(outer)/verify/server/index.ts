"use server";

import CurrentUser from "@/functions/CurrentUser";
import SaveFileToPublicDir from "@/functions/SaveFile";
import FormResultState from "@/lib/types/FormResultState";
import prisma from "@/services/singleton_prisma";
import { User } from "@prisma/client";


export default async function SaveVerify(prevState: FormResultState, formData: FormData) {
    let result = false;
    const identityFile = formData.get("passport");


    if ((identityFile as File).size > 0) {
        const identityName = await SaveFileToPublicDir(identityFile, "users/identity");
        if (identityName) {
            await UpdateUserTable(identityName);
            result = true;
        }

    }

    return {
        id: prevState.id + Math.random() + 1,
        success: result,
        message: result ? "successfully done" : "some thing is wrong "
    }
}
async function UpdateUserTable(identity: string) {
    const user: User = await CurrentUser();
    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            identity, verifyLevel: "Pending"
        }
    })

}
