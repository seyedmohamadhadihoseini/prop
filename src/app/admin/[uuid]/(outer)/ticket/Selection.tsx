import style from "./style/selection.module.css";
import { TicketCategory, TicketLevel } from "@prisma/client";
import { useLayoutEffect, useState } from "react";
import { GetAllTicketCategoris } from "./server";

export default function SelectionTicket
    ({ category, setCategory, ticketStatus, setTicketStatus }: {
        category: string, setCategory: (x: string) => void,
        ticketStatus: string, setTicketStatus: (x: string) => void
    }) {
    const [categories, setCategories] = useState<TicketCategory[]>([]);
    useLayoutEffect(() => {
        GetAllTicketCategoris().then(setCategories);
    }, [])
    const displayTicketCategories = categories.map(category => {
        return <option>{category.name}</option>
    })
    return <div className={style["main-container"]}>
        <div >
            <label>category:</label>
            <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value="">All</option>
                {displayTicketCategories}
            </select>
        </div>
        <div>
            <label>status:</label>
            <select value={ticketStatus} onChange={e => { setTicketStatus(e.target.value) }}>
                <option value={""}>All</option>
                <option value={TicketLevel.Closed}>Closed</option>
                <option value={TicketLevel.Pending}>Pending</option>
                <option value={TicketLevel.Answered}>Answered</option>
            </select>
        </div>
    </div >
}