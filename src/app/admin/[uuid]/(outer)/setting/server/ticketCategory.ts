"use server";

import FormResultState from "@/lib/types/FormResultState";
import prisma from "@/services/singleton_prisma";

export async function StoreTicketCategory(prevState: FormResultState, formData: FormData) {
    let result = 0;
    const name = formData.get("category-name") as string;
    const preTicket = await prisma.ticketCategory.findUnique({
        where: {
            name
        }
    });
    if (preTicket) {
        result = 1;
    }
    else{

        const category = await prisma.ticketCategory.create({
            data: {
                name
            }
        })
        if (category) {
            result = 2;
        }
    }
    let final: FormResultState = {
        id: prevState.id + Math.random() + 1,
        success: result === 2,
        message: result == 2 ? "successfully added" : (result == 1 ? "the category already exist" : "unknow error")
    }
    return final;
}
export async function GetAllTicketCategoris() {
    return await prisma.ticketCategory.findMany();
}
export async function RemoveCategory(name: string) {
    await prisma.ticketCategory.delete({
        where: { name }
    })
}