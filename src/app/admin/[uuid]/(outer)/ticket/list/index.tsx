import { Ticket, TicketLevel } from "@prisma/client";
import { useLayoutEffect, useState } from "react";
import TicketItem from "./item";
import "./style.css";
import GetTickets from "../server";
import Pagination from "@/components/pagination";
export default function TicketListAdmin({ ticketStatus, category }: { ticketStatus: string, category: string }) {
    const [tickets, setTickets] = useState<Ticket[]>();
    const [skip, setSkip] = useState(0);
    const take = 2;
    useLayoutEffect(() => {
        GetTickets(category, ticketStatus,skip,take).then(setTickets);
    }, [ticketStatus, category,skip,take]);
    const displayTickets = tickets?.map(ticket => {
        return <TicketItem ticket={ticket} />
    })
    return <div className="ticket-list">

        {displayTickets}
        <Pagination skip={skip} setSkip={setSkip} take={take}/>
    </div>
}