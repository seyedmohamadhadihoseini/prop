import { Cryptr_Decrypt } from "@/services/cryptr";
import prisma from "@/services/singleton_prisma";
import { redirect } from "next/navigation";
import { useEffect } from 'react';
import ActionForResetPassword from './server';
import ResetFormDisplay from "./ResetForm";





export default async function ResetPassword({ params }: { params: { id: string } }) {
    const id = params.id;
    const email = Cryptr_Decrypt(id);
    const isEmailExist: boolean = await CheckEmail(email);
    if (!isEmailExist) {
        return redirect("/auth/login");
    }
    
    return <ResetFormDisplay email={email} />

}
async function CheckEmail(email: string) {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });
    let result = false;
    if (user) {
        result = true;
    }
    return result;
}


