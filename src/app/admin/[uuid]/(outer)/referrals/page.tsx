"use client";

import { useLayoutEffect, useState } from "react";
import GetAllUser from "./server";
import ReferralsItem from "./item";
import Pagination from "@/components/pagination";
import style from "./style.module.css";
export default function Referrals() {
    const [users, setUsers] = useState<React.JSX.Element[]>([]);
    const take = 10;
    const [skip, setSkip] = useState(0);
    useLayoutEffect(() => {
        GetAllUser(take, skip).then(cusers => {
            setUsers(cusers.map(user => <ReferralsItem key={user.id} user={user} />))
        });
    }, [])
    return <div className="row mt-3">
        <div className="col-lg-12">
            <div className="card">
                <div className="">
                    <div className="table-responsive">
                        <table className={`table ${style.table}`}>
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">User</th>
                                    <th scope="col">Total Count</th>
                                    <th scope="col">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Pagination setSkip={setSkip} skip={skip} take={take} />
        </div>
    </div>
}