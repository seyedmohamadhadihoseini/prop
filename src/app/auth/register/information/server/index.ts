"use server";
import GrantSession from "@/functions/GrantSession";
import SaveFileToPublicDir from "@/functions/SaveFile";
import FormResultState from "@/lib/types/FormResultState";
import prisma from "@/services/singleton_prisma";
import { randomUUID } from "crypto";
import { writeFile } from "fs/promises";

import { cookies } from "next/headers";

export default async function SetRegisterInformatiom(prevState: FormResultState, formData: FormData) {

    let result: boolean = false;
    const rawData = Object.fromEntries(formData);
    const { firstName, lastName, address, profile, telephone } = rawData;

    // email and password  .
    const sessionId = cookies().get("sessionId__")?.value;

    if (sessionId) {
        const EmailAndPass = await ReadEmailAndPassword(sessionId);
        const email = EmailAndPass?.email;
        const password = EmailAndPass?.password;
        if (email && password) {
            const newProfileName = await SaveFileToPublicDir(profile, "users/img");
            const userId = await WriteToDbNewUser(email, address.toString(), telephone.toString(), firstName.toString(), lastName.toString(), password, newProfileName);
            await GrantSession(userId);
            result = true;
        }
    }
    return {
        id: prevState.id + Math.random() + 1,
        success: true,
        message: result ? `welcome dear ${firstName} to your panel` : "error in your input"
    }
}
async function WriteToDbNewUser(email: string, address: string, telephone: string, firstName: string, lastName: string, password: string, profile: string | null) {
    const user = await prisma.user.create({
        data: {
            email, firstName, lastName, password,
            address: address.length > 0 ? address : null
            , profile: profile ? profile : null,
            telephone: telephone.length > 0 ? telephone : null
        }
    });
    return user.id;
}
async function ReadEmailAndPassword(sessionId: string) {
    const result = await prisma.confirmCode.findUnique({
        where: {
            id: sessionId
        }
    });
    return result;
}

async function SaveProfile(file: any) {

    let extention = file.name.split(".").pop();
    if (!extention) {
        return null;
    }
    const storedName: string = randomUUID() + "." + extention;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const pathname = `./public/users/img/${storedName}`;
    await writeFile(pathname, buffer);
    return storedName;
}