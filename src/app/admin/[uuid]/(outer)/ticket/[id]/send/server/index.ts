"use server";

import CurrentUser from "@/functions/CurrentUser";
import prisma from "@/services/singleton_prisma";
import { User } from "@prisma/client";


export default async function SendNewMessage(ticketId: number, text: string) {
    await SaveMessageToDb(text, ticketId);

}
async function SaveMessageToDb(text: string, ticketId: number) {
    const ticket = await prisma.ticket.findUnique({
        where: {
            id: ticketId
        }, include: {
            user: true
        }
    });
    const user = ticket?.user;
    if (user) {
        await prisma.ticketMessage.create({
            data: {
                text, isFromUser: false, ticketId, userId: user.id
            }
        })

    }
}