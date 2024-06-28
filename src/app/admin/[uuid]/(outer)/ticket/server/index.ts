"use server";

import prisma from "@/services/singleton_prisma";
import { TicketLevel } from "@prisma/client";

export default async function GetTickets(category: string, status: string, email: string, skip: number, take: number) {
    let categoryFilter = {};
    if (category.length > 0) {
        categoryFilter = { categoryName: category };
    }

    let statusFilter = {};
    if (status.length > 0) {
        statusFilter = { level: status }
    }
    let emailFilter :{}[]= [];
    if (email.length > 0) {
        const users = await prisma.user.findMany({
            where: {
                email: {
                    startsWith: email
                }
            }
        });
        users.forEach(user => {
            const filter = { userId: user.id };
            emailFilter.push(filter);
        })
    }
    if(emailFilter.length==0 && email.length>0){
        emailFilter = [{userId:-1}]
    }

    return await prisma.ticket.findMany({
        where: {
            AND: [
                categoryFilter, statusFilter, {
                    OR: emailFilter
                }
            ]

        },
        skip, take
    })

}

export async function GetAllTicketCategoris() {
    return await prisma.ticketCategory.findMany();
}
export async function ChangeStatusOfTicket(ticketId: number, newStatus: any) {

    await prisma.ticket.update({
        where: {
            id: ticketId
        },
        data: {
            level: newStatus
        }
    })
}