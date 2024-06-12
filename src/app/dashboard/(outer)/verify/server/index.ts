"use server";

import CurrentUser from "@/functions/CurrentUser";
import SaveFileToPublicDir from "@/functions/SaveFile";
import FormResultState from "@/lib/types/FormResultState";
import prisma from "@/services/singleton_prisma";
import { User } from "@prisma/client";


export default async function SaveVerify(prevState:FormResultState, formData: FormData) {
    let result = false;
    let birthDate:any = formData.get("birth-date");
    const identityFile = formData.get("passport");
    if (birthDate) {
        birthDate = FixDate(birthDate.toString())
        birthDate = new Date(birthDate).toISOString()
        
        if ((identityFile as File).size > 0) {
            const identityName = await SaveFileToPublicDir(identityFile, "users/identity");
            if (identityName) {
                await UpdateUserTable(birthDate.toString(), identityName);
                result = true;
            }

        }
    }

    return {
        id:prevState.id+Math.random()+1,
        success : result,
        message:result?"successfully done":"some thing is wrong "
    }
}
function FixDate(date:string){
    let [month,day,year] = date.split("/");
    return `${year}-${month}-${day}`;
}
async function UpdateUserTable(brithDate: string, identity: string) {
    const user: User = await CurrentUser();
    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            brithDate, identity,verifyLevel:"Pending"
        }
    })

}
