import { Ticket } from "@prisma/client";
import "./style.css";
import { usePathname, useRouter } from "next/navigation";
import ModalExample from "./modal";
import { useState } from "react";
export default function TicketItem({ ticket }: { ticket: Ticket }) {
    // const [open, setOpen] = useState(false)
    const status = ticket.level;
    const router = useRouter();
    const pathname = usePathname();

    return <div className={`ticket-item ${status}`} onClick={e => {
        router.push(`${pathname}/${ticket.id}`)
    }}>

        {/* <ModalExample open={open} setOpen={setOpen} ticket={ticket} /> */}
        <h3>{ticket.title}</h3>
        <span className="account-number">{ticket.accountNumber}</span>
        <span>{ticket.content.substring(0, 30)} ...</span>
    </div>
}
