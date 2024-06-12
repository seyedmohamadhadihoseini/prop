"use server";

import CurrentUser from "@/functions/CurrentUser";
import prisma from "@/services/singleton_prisma";
import { User } from "@prisma/client";


export default async function SendNewMessage(ticketId:number,text:string) {
    await SaveMessageToDb(text,ticketId);

}
async function SaveMessageToDb(text:string,ticketId:number) {
    const user : User  = await CurrentUser();
    await prisma.ticketMessage.create({
        data:{
            text,isFromUser:true,ticketId,userId:user.id
        }
    })
}