import { Ticket } from "@prisma/client";
import "./style.css";
import { usePathname, useRouter } from "next/navigation";
export default function TicketItem({ ticket }: { ticket: Ticket }) {
    const status = ticket.level;
    const router = useRouter();
    const pathname = usePathname();

    return <div className={`ticket-item ${status}`} onClick={e => {
        router.push(`${pathname}/${ticket.id}`)
    }}>

        <h3>{ticket.title}</h3>
        <span className="account-number">{ticket.accountNumber}</span>
        <span>{ticket.content.substring(0, 30)} ...</span>
    </div>
}
