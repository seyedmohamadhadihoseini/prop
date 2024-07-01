"use client";

import { useFormState } from "react-dom";
import { GetAllTicketCategoris, RemoveCategory, StoreTicketCategory } from "./server/ticketCategory";
import { useEffect, useLayoutEffect, useState } from "react";
import { TicketCategory } from "@prisma/client";
import TicketCategoryOption from "./elements/ticketCategoryOption";
import style from "./style.module.css";
import { toast } from "react-toastify";
export default function TicketCategorySetting() {

    const [ticketCategory, ticketCategoryAction] = useFormState(StoreTicketCategory, { id: 0, success: false, message: "" });
    const [ticketCategories, setTicketCategories] = useState<TicketCategory[]>([]);
    const [ticketCategoryText, setTicketCategoryText] = useState("");
    const [selectCategory, setSelectCategory] = useState("");
    useLayoutEffect(() => {
        GetAllTicketCategoris().then(setTicketCategories);
    }, [ticketCategory, selectCategory])
    useEffect(() => {
        if (ticketCategory.message.length > 0) {
            setTicketCategoryText("");
            if (ticketCategory.success) {
                toast.success(ticketCategory.message);
            }
            else {
                toast.warn(ticketCategory.message);
            }

        }
    }, [ticketCategory])
    const displayTicketCategories = ticketCategories.map(c => <TicketCategoryOption key={c.name} name={c.name} />)
    return <div className={style["main-container"]}>
        <div className={style["set-category-container"]}>
            <h3>Ticket Categories</h3>
            <div className={style["select-categories"]}>
                <select value={selectCategory} onChange={e => {
                    setSelectCategory(e.target.value);
                }}>
                    <option></option>
                    {displayTicketCategories}
                </select>
                <button onClick={async (e) => {
                    await RemoveCategory(selectCategory);
                    setSelectCategory("");
                }} >remove</button>
            </div>
            <form action={ticketCategoryAction} className={style["set-category-form"]}>
                <input type="text" name="category-name" value={ticketCategoryText}
                    onChange={e => {
                        setTicketCategoryText(e.target.value);
                    }}
                    placeholder="new category" />
                <button type="submit" >Add</button>
            </form>

        </div>
        <hr />
    </div>
}