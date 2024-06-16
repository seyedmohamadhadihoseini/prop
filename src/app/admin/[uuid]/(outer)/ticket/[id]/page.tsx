import CurrentUser from "@/functions/CurrentUser";
import prisma from "@/services/singleton_prisma";
import { User } from "@prisma/client";
import { redirect } from "next/navigation";
import TicketHistory from "./history";
import TicketSendNew from "./send";
import TicketHeaderChat from "./header/ticketHeader";
import "./style.css";
export default async function TicketChat({ params }: { params: { id: string } }) {

    const id = parseInt(params.id);
    const ticketMessages = await GetTicketMessages(id);
    const ticket = await GetTicket(id);
    if ((!ticketMessages) || (!ticket)) {
        return redirect("admin/ticket");
    }
    return <div id="ticket-chat-container">
        <div id="ticket-chat-header">
            {ticket && <TicketHeaderChat ticketTitle={ticket.title} />}
        </div>
        <div id="ticket-chat-history">
            <TicketHistory ticketMessages={ticketMessages} />
        </div>
        <div id="ticket-chat-send">
            <TicketSendNew ticketId={ticket.id} />
        </div>
    </div>


}
async function GetTicket(ticketId: number) {
    const ticket = await prisma.ticket.findUnique({
        where: {
            id: ticketId
        }
    })
    return ticket;
}
async function GetTicketMessages(ticketId: number) {

    const ticketMessages = await prisma.ticketMessage.findMany({
        where: {
            ticketId
        }
    })
    return ticketMessages;
}