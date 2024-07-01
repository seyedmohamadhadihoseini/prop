"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import OrderListItem from "./item";
import style from "./style.module.css";
import { Challenge } from "@prisma/client";
import SearchUsersById from "./functions/SearchUsers";

export default function OrdersList({ challenges }: { challenges: Challenge[] }) {
    const [orders, setOrders] = useState<any[]>([]);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState<any>("All");
    useLayoutEffect(() => {
        if (status === "All") {
            setOrders(challenges);
        }
        else if (status === "Pending") {
            setOrders(challenges.filter(ch => !ch.isPaid));
        } else {
            setOrders(challenges.filter(ch => ch.isPaid));
        }
    }, [status]);
    const displayOrders = orders.map(order => <OrderListItem challenge={order} />)
    return <div className={style.main}>
        <select onChange={e => {
            setStatus(e.target.value);
        }}>
            <option value={"All"}>All</option>
            <option value={"Pending"}>Pending</option>
            <option value={"Paid"}>Paid</option>
        </select>
        <input type="text" className={style.filter} placeholder="enter user email" value={search}
            onChange={e =>{ 
                setSearch(e.target.value)
                if(search.length ==0){
                    setOrders(challenges)
                }
            }}
            onKeyUp={(e) => {
                setOrders(SearchUsersById(challenges,search));
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