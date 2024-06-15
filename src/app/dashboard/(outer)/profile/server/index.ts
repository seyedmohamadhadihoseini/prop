"use server";

import { GetUserWithoutCache } from "@/functions/CurrentUser";
import SaveFileToPublicDir from "@/functions/SaveFile";
import FormResultState from "@/lib/types/FormResultState";
import { Hash } from "@/services/bcrypt";
import prisma from "@/services/singleton_prisma";
export async function GetUser() {
    const user = await GetUserWithoutCache();

    return user;
}

export default async function UpdateProfile(prevState: FormResultState, formData: FormData) {
    const firstName = formData.get("first-name") as string;
    const lastName = formData.get("last-name") as string;
    const email = formData.get("email") as string;
    const telephone = formData.get("mobile") as string;
    const address = formData.get("address") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirm-password") as string;
    const profile = formData.get("profile") as File;
    let success = true;
    const checkPass = CheckForPasswords(password, confirmPassword);
    let data: any = {
        firstName, lastName, address, telephone
    }
    if (checkPass !== false) {
        if (checkPass === true) {
            data = { ...data, password:await Hash(password) };
        }
        if (profile.size > 0) {
            const newFileName = await SaveFileToPublicDir(profile, "users/img");
            data = { ...data, profile: newFileName }
        }
    }
    else {
        success = false;
    }
    if (success) {
        await prisma.user.update({
            where: {
                email
            },
            data
        })
    }
    const result: FormResultState = {
        id: prevState.id + Math.random() + 1,
        success,
        message: success ? "update successfully" : "passwords are not same or another problem occur",
    }
    return result;
}
function CheckForPasswords(pass: string, cPass: string) {
    let result = false;
    if (pass && cPass) {
        result = (pass === cPass)
    }
    else { return null; }
    return result;
}
// {
//     'first-name': 'seyed',
//     'last-name': 'developer',
//     email: 'developerseyed@gmail.com',
//     mobile: '+223 25 54 11 22',
//     address: 'kashan',
//     password: '',
//     'confirm-password': '',
//     profile: File {
//       size: 0,
//       type: 'application/octet-stream',
//       name: 'undefined',
//       lastModified: 1718449925539
//     }
//   }