"use server";
import CurrentUser from "@/functions/CurrentUser";
import prisma from "@/services/singleton_prisma";
import { TicketLevel, User } from "@prisma/client";

export default async function GetTickets(ticketLevel: string) {
    let level = null;
    switch (ticketLevel) {
        case "Pending":
            level = TicketLevel.Pending;
            break;
        case "Answered":
            level = TicketLevel.Answered;
            break;
        case "Closed":
            level = TicketLevel.Closed;
            break;
    }
    const user: User = await CurrentUser();
    let tickets = null;
    if (level) {
        tickets = await prisma.ticket.findMany({
            where: {
                level, userId: user.id
            }
        });
    }
    else {
        tickets = await prisma.ticket.findMany({
            where: {
                userId: user.id
            }
        });
    }
    return tickets;
}