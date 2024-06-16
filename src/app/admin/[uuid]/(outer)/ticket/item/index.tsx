import { Ticket } from "@prisma/client";
import "./style.css";
import Link from "next/link";
export default function TicketItem({ ticket }: { ticket: Ticket }) {

    return <div>
        <h3>{ticket.title}</h3>
        <p>{ticket.content}</p>
        <Link href={`${process.env.NEXT_PUBLIC_HOST}/api/file/get_ticket-file?name=${ticket.attachedFile}`}>Attach File</Link>
    </div>
}