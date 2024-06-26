"use client"
import { useState } from "react";
import style from "./style.module.css";
import OrdersList from "./list";

export default function OrdersApp() {

    const [status, setStatus] = useState<any>("All");

    return <div className={style.main}>
        <select onChange={e => {
            setStatus(e.target.value);
        }}>
            <option value={"All"}>All</option>
            <option value={"Pending"}>Pending</option>
            <option value={"Paid"}>Paid</option>
        </select>

        <div className="order-list">
            <OrdersList status={status} />
        </div>


    </div>
}