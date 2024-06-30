"use client";

import { History } from "@prisma/client";
import style from "./style.module.css";

export default function AnalyzePanel({ histories, res ,username}: { histories: History[], res: any,username:string }) {
    const deals = parseInt(res.deals);
    let profitTotal = 0;
    let lossTotal = 0;
    const displayHistories = histories.map(history =>{
        profitTotal += history.profit;
        lossTotal += history.loss;
        return <div key={history.date} className={style.main}>
        balance:<p>{history.balance}</p>
        date:<p>{history.date}</p>
        profit:<p>{history.profit}</p>
        loss:<p>{history.loss}</p>
        drawdown:<p>{history.drawdown}%</p>
    </div>})
    return <div>
        <div>
            username<p>{username}</p>
            deals:<p>{deals}</p>
            profitTotal:<p>{profitTotal}</p>
            lossTotal:<p>{lossTotal}</p>
        </div>
        {displayHistories}
    </div>
}