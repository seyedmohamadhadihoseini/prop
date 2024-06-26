"use client";
import "./style.css";
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { useFormState } from "react-dom";
import SendNewTicket, { GetAllRelatedMT5Acc, GetAllTicketCategoris } from "./server";
import { useEffect, useLayoutEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { TicketCategory } from "@prisma/client";
export default function NewTicketApp() {
    const [categories, setCategories] = useState<TicketCategory[]>([]);
    const [accs, setAccs] = useState<string[]>([]);
    useLayoutEffect(() => {
        GetAllTicketCategoris().then(setCategories);
        GetAllRelatedMT5Acc().then(setAccs);
    }, [])
    const displayCategories = categories.map(category => <option style={{ color: "black", backgroundColor: "white" }} key={category.name} value={category.name}>{category.name}</option>)
    const displayAccountsOption = accs.map(acc => <option style={{ color: "black", backgroundColor: "white" }} key={acc} value={acc}>{acc}</option>)
    const [state, formAction] = useFormState(SendNewTicket, { id: 0, success: false, message: "" });
    const router = useRouter();
    useEffect(() => {
        if (state.message.length > 0) {
            if (state.success) {
                router.replace("/dashboard/ticket");
            }
            else {
                toast.warn(state.message)

            }
        }
    }, [state.id])
    return <div>
        <h2>New Ticket</h2>
        <div id='close-pico'>
            <Link href="/dashboard/ticket">
                <CloseIcon sx={{ fontSize: "20" }} />
            </Link>
        </div>
        <form id='new-ticket-form' action={formAction}>
            <div className='item-form'>
                <label htmlFor="">Account Number:</label>
                <select name="account-number" style={{ padding: 3 }}>
                    {displayAccountsOption}
                </select>
            </div>

            <div className='item-form'>
                <label htmlFor="">category:</label>
                <select name="category" style={{ color: "white" }}>
                    {displayCategories}
                </select>
            </div>
            <div className='item-form'>
                <label htmlFor="">Title:</label>
                <input type="text" name="title" id="" required style={{ padding: 7 }} />
            </div>
            <div className='item-form'>
                <label htmlFor="">Content:</label>
                <textarea name="content" id="" rows={3} required></textarea>
            </div>
            <div className='item-form' >
                <label htmlFor="ticket-attach-file">attached file</label>
                <input type='file' name='attached-file' id='ticket-attach-file' />
            </div>
            <div style={{ padding: 10 }}>

                <button type='submit'>Send</button>
            </div>
        </form>
    </div>
}