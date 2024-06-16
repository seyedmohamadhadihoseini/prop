import "./style.css";
export default function TicketHeaderChat({ticketTitle}:{ticketTitle:string}) {
    
    
    return <div className="ticket-chat-title">
        {ticketTitle}
    </div>
}