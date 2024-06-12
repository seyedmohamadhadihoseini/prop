"use client";
import SendNewTicketButton from "./SendButton";
import { useState } from "react";
import "./style.css";
import TicketListClient from "./list";
export default function TicketApp() {
    const [value, setValue] = useState("all");
    return <div className="ticket-list-page">
        <div id="ticket-header-container">
        <h3>Tickets List</h3>
        <br/>
            <SendNewTicketButton />
            <select id="ticket-type" value={value} onChange={e => {
                setValue(e.target.value);
            }}>
                <option value={"All"}>all</option>
                <option value={"Closed"}>Closed</option>
                <option value={"Pending"}>Pending</option>
                <option value={"Answered"}>Answered</option>
            </select>
        </div>
        <hr/>
        <TicketListClient ticketType={value}/>
    </div>
}