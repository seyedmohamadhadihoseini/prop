import { useLayoutEffect, useState } from "react";
import GetOrders, { SearchByUser } from "./server";
import OrderListItem from "./item";
import style from "./style.module.css";
import { Challenge } from "@prisma/client";

export default function OrdersList({ status }: { status: "All" | "Paid" | "Pending" }) {
    const [orders, setOrders] = useState<Challenge[]>([]);
    const [search, setSearch] = useState("");
    useLayoutEffect(() => {
        GetOrders(status).then(setOrders);
    }, [status]);
    const displayOrders = orders.map(order=><OrderListItem challenge={order} />)
    return <div className={style.main}>
        <input type="text" className={style.filter} placeholder="enter user email" value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyUp={async (e) => {
                    setOrders(await SearchByUser(search));
                }}
            />
        {displayOrders}
    </div>

}