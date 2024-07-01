import { Ticket, TicketLevel } from "@prisma/client";
import "./style.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { ChangeStatusOfTicket } from "../../server";
export default function TicketItem({ ticket }: { ticket: Ticket }) {
    const [status, setStatus] = useState(`${ticket.level}`);
    const router = useRouter();
    const pathname = usePathname();

    return <tr className={`tr-ticket-container ${status}`}>
        <th scope="row">{ticket.id}</th>
        <td style={{ cursor: "pointer" }} onClick={e => {
            router.push(`${pathname}/${ticket.id}`)
        }}>{ticket.title}</td>
        <td><span className="account-number">{ticket.accountNumber}</span></td>
        <td>{ticket.categoryName}</td>
        <td>
            <Link className="user-detail" href={`users/${ticket.userId}`}> User Deatil</Link>
        </td>
        <td>
            <div className="select-status">
                <select value={status} onChange={async (e) => {
                    setStatus(e.target.value);
                    await ChangeStatusOfTicket(ticket.id, e.target.value);
                }}>
                    <option value={"Pending"}>Pending</option>
                    <option value={"Answered"}>Answered</option>
                    <option value={"Closed"}>Closed</option>
                </select>

            </div>
        </td>
        <td>
            {ticket.attachedFile ? <Link href={`/api/file/get_ticket_file?name=${ticket.attachedFile}`}>
                <AttachFileIcon />
            </Link> : ""}
        </td>
        <td>
            <span>{ticket.content.substring(0, 30)} ...</span>
        </td>
    </tr>
    return <div className={`ticket-item ${status}`} >
        <div className="info">

            <h3 onClick={e => {
                router.push(`${pathname}/${ticket.id}`)
            }}>{ticket.title}</h3>
            <span className="account-number">{ticket.accountNumber}</span>
            <p><b>Category:</b> {ticket.categoryName}</p>
            <Link className="user-detail" href={`users/${ticket.userId}`}> User Deatil</Link>
            {ticket.attachedFile && <Link href={`/api/file/get_ticket_file?name=${ticket.attachedFile}`}>
                <AttachFileIcon />
            </Link>}
            <span>{ticket.content.substring(0, 30)} ...</span>
        </div>
        <div className="select-status">
            <select value={status} onChange={async (e) => {
                setStatus(e.target.value);
                await ChangeStatusOfTicket(ticket.id, e.target.value);
            }}>
                <option value={"Pending"}>Pending</option>
                <option value={"Answered"}>Answered</option>
                <option value={"Closed"}>Closed</option>
            </select>

        </div>
    </div>
}

