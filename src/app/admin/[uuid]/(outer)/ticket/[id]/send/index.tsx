"use client";
import { useEffect, useState } from "react";
import "./style.css";
import SendNewMessage from "./server";
import { useRouter } from "next/navigation";
export default function TicketSendNew({ ticketId }: { ticketId: number }) {
    const [txt, setTxt] = useState("")
    const router = useRouter();

    useEffect(() => {

    }, [])
    async function SendMessage() {
        const temp = txt;
        setTxt("");
        await SendNewMessage(ticketId, temp);
        router.refresh();
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 1000);
        })
        const chatH = document.getElementById("ticket-chat-history");
        chatH?.scrollTo(0, chatH?.scrollHeight + 1000);
    }
    return <div id="ticket-send-message">
        <textarea name="message-text" value={txt} onKeyDown={async (e) => {
            if ((!e.shiftKey) && e.code === "Enter") {
                await SendMessage()
            }
        }} onChange={e => {
            setTxt(e.target.value);
        }} />
        <button onClick={async (e) => {
            await SendMessage();
        }}>Send</button>
    </div>
}