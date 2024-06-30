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
            <div className="row mt-3">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Basic Table</h5>
                            <div className="table-responsive">
                                <table className="table" style={{
                                    textAlign: "center"
                                }}>
                                    <thead>
                                        <tr>
                                            <th scope="col">order id</th>
                                            <th scope="col">email</th>
                                            <th scope="col">status</th>
                                            <th scope="col">price</th>
                                            <th scope="col">date</th>
                                        </tr>
                                    </thead>
                                   <tbody>{displayOrders}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>

}