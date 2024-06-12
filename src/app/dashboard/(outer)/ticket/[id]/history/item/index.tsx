import { TicketMessage } from "@prisma/client";
import "./style.css";
export default function TicketChatItem({ ticketMessage }: { ticketMessage: TicketMessage }) {

    return <div className={`ticket-message-chat ${ticketMessage.isFromUser?"mine":"admin"}`}>
        <span >
            {ticketMessage.text}
        </span>
    </div>
}