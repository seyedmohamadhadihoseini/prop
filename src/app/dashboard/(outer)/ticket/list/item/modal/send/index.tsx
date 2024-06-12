import SendNewMessageTicket from "./SendButton";
import "./style.css";
export default function SendModalPart() {


    return <div className="ticket-modal-sends">
        <textarea  name="new-message" placeholder="enter your message here ..." />
        <SendNewMessageTicket />
    </div>
}