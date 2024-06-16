import { TicketMessage } from "@prisma/client";
import TicketChatItem from "./item";
import "./style.css";
export default function TicketHistory({ticketMessages}:{ticketMessages:TicketMessage[]}){
    const displayTicketMessages = ticketMessages.map(ticketMessage => {
        return <TicketChatItem ticketMessage={ticketMessage} />
    })

    return <div className="ticket-history" id="ticket-history">
        
        {displayTicketMessages}
    </div>
}