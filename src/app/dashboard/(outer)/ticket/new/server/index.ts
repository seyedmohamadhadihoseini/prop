"use server";

import CurrentUser from "@/functions/CurrentUser";
import SaveFileToPublicDir from "@/functions/SaveFile";
import FormResultState from "@/lib/types/FormResultState";
import prisma from "@/services/singleton_prisma";
import { User } from "@prisma/client";


export default async function SendNewTicket(prevState: FormResultState, formData: FormData) {

    let result = false;


    const accountNumber = parseInt(formData.get("account-number") as string);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;

    const attachedFile = formData.get("attached-file") as File;
    const fileName = await SaveFileToPublicDir(attachedFile, "ticket_file");

    await StoreNewTicketToDb(accountNumber, content, title, fileName, category);
    result = true;


    return {
        id: prevState.id + Math.random() + 1,
        success: result,
        message: result ? "successfully send" : "error exists"
    }
}
async function StoreNewTicketToDb(accountNumber: number, content: string, title: string, attachedFile: string | null, category: string) {
    const user: User = await CurrentUser();
    const ticket = await prisma.ticket.create({
        data: {
            accountNumber, content, title, attachedFile, userId: user.id, categoryName: category
        }
    });
    await prisma.ticketMessage.create({
        data: {
            text: content, date: new Date().toISOString(), isFromUser: true, ticketId: ticket.id, userId: user.id
        }
    })
}
export async function GetAllTicketCategoris() {
    return await prisma.ticketCategory.findMany();
}