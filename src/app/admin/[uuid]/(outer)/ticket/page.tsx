"use client";

import { useLayoutEffect, useState } from "react";
import SelectionTicket from "./Selection";
import { Ticket } from "@prisma/client";
import GetTickets from "./server";
import TicketListAdmin from "./list";

export default function AdminTicketApp() {
    const [category, setCategory] = useState<string>("");
    const [ticketStatus, setTicketStatus] = useState("");

    return <div>

        <SelectionTicket category={category} setCategory={setCategory} ticketStatus={ticketStatus} setTicketStatus={setTicketStatus} />
        <hr />
        <TicketListAdmin category={category} ticketStatus={ticketStatus} />
    </div>
}