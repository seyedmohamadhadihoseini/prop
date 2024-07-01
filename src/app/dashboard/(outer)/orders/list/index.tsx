import { useLayoutEffect, useState } from "react";
import GetOrders from "./server";
import OrderListItem from "./item";
import style from "./style.module.css";

export default function OrdersList({ status }: { status: "All" | "Paid" | "Pending" }) {
    const [orders, setOrders] = useState<React.JSX.Element[]>([]);
    useLayoutEffect(() => {
        GetOrders(status).then(ros => {
            setOrders(ros.map(r =>
                <OrderListItem key={r.id} challenge={r} />
            ))

        });
    }, [status]);

    return <div className={style.main}>
        {orders}
    </div>

}