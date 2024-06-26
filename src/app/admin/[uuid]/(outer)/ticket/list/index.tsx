import { Ticket, TicketLevel } from "@prisma/client";
import { useLayoutEffect, useState } from "react";
import TicketItem from "./item";
import "./style.css";
import GetTickets from "../server";
import Pagination from "@/components/pagination";
import MyTable from "@/components/table";
export default function TicketListAdmin({ ticketStatus, category, email }: { ticketStatus: string, category: string, email: string }) {
    const [tickets, setTickets] = useState<Ticket[]>();
    const [skip, setSkip] = useState(0);
    const take = 10;
    useLayoutEffect(() => {
        GetTickets(category, ticketStatus, email, skip, take).then(setTickets);
    }, [ticketStatus, category, email, skip, take]);
    const displayTickets = tickets?.map(ticket => {
        return <TicketItem ticket={ticket} key={ticket.id} />
    })

    return <div className="ticket-list">
        
        <MyTable tableTitle="ticket list"
            titles={["id", "title", "account number", "category", "user detail","select status", "attachFile", "summary"]}
            displayRows={displayTickets || []}
        />
        <Pagination skip={skip} setSkip={setSkip} take={take} />
    </div>
}