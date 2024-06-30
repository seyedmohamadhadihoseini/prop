"use client";

import { MT5Account } from "@prisma/client";
import { useLayoutEffect, useState } from "react";
import GetFreeMT5Accounts from "./server";
import Mt5Item from "./item";

export default function AccountsTable() {
    const [accounts, setAccounts] = useState<MT5Account[]>([]);
    useLayoutEffect(() => {
        GetFreeMT5Accounts().then(setAccounts);
    }, [])
    const displayAccounts = accounts.map(acc => <Mt5Item mt5Acc={acc} />)
    return <div className="col-lg-12" style={{textAlign:"center"}}>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">MT5 accounts</h5>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">challenge</th>
                                <th scope="col">server</th>
                                <th scope="col">number</th>
                                <th scope="col">pass</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayAccounts}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
}
