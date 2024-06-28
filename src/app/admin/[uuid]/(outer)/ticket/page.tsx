"use client";

import { useLayoutEffect, useState } from "react";
import SelectionTicket from "./Selection";
import { Ticket } from "@prisma/client";
import GetTickets from "./server";
import TicketListAdmin from "./list";

export default function AdminTicketApp() {
    const [category, setCategory] = useState<string>("");
    const [ticketStatus, setTicketStatus] = useState("");
    const [email,setEmail] = useState("");
    return <div>

        <SelectionTicket category={category} setCategory={setCategory}
         ticketStatus={ticketStatus} setTicketStatus={setTicketStatus}
         email={email}
         setEmail={setEmail}
          />
        <hr />
        <TicketListAdmin email={email} category={category} ticketStatus={ticketStatus} />
    </div>
}