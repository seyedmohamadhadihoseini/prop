import { Ticket, TicketLevel } from "@prisma/client";
import { useLayoutEffect, useState } from "react";
import GetTickets from "./server";
import TicketItem from "./item";
import "./style.css";
export default function TicketListClient({ ticketType }: { ticketType: string }) {
    const [tickets, setTickets] = useState<Ticket[]>();

    useLayoutEffect(() => {
        GetTickets(ticketType).then(tickets => {
            setTickets(tickets);
        })
    }, [ticketType]);
    const displayTickets = tickets?.map(ticket => {
        return <TicketItem key={ticket.id} ticket={ticket} />
    })
    return <div className="ticket-list">
     
        {displayTickets}
        
    </div>
}