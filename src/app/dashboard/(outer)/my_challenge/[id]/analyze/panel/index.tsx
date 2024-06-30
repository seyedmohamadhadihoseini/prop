"use client";

import { History } from "@prisma/client";
import style from "./style.module.css";
import PersonIcon from '@mui/icons-material/Person';
import PanelCard from "./card";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import ProfitLossChart from "./charts/profitloss";
import BalanceChart from "./charts/balance";
export default function AnalyzePanel({ histories, res, username }: { histories: History[], res: any, username: string }) {
    const deals = parseInt(res.deals);
    let profitTotal = 0;
    let lossTotal = 0;
    let maxDrawDown = 0;
    const profitLossChartProfit: any[] = [];
    const profitLossChartDate: any[] = [];

    const BalanceChartVal: any = [];
    let count = 0;
    histories.forEach(history => {
        maxDrawDown = Math.max(maxDrawDown, history.drawdown);
        profitTotal += history.profit;
        lossTotal += history.loss;
        count++;
        profitLossChartDate.push(new Date(history.date));
        BalanceChartVal.push(history.balance);
        if (history.profit != 0) {
            profitLossChartProfit.push(history.profit);
        } else {
            profitLossChartProfit.push(history.loss);
        }
    })
    let tempDate = new Date();
    const realProfitLossChartDate = [...profitLossChartDate];
    for (let i = 1; i <= 30 - count; ++i) {
        tempDate.setDate(tempDate.getDate() + 1)
        profitLossChartDate.push(new Date(tempDate.toISOString().split("T")[0]));
        profitLossChartProfit.push(0);
    }
    // console.log(profitLossChartDate);
    return <div className={style.main}>
        <div className={style["card-container-header"]}>
            <PanelCard ico={<PersonIcon />} title="username" value={username} />
            <PanelCard ico={<BorderColorIcon />} title="balance" value={`${res.balance} $`} />
            <PanelCard ico={<MonetizationOnIcon />} title="total profit" value={`${profitTotal} $`} />
            <PanelCard ico={<MoneyOffIcon />} title="total loss" value={`${lossTotal} $`} />
            <PanelCard ico={<MonetizationOnIcon />} title="max drawdown" value={`${maxDrawDown}%`} />
            <PanelCard ico={<BorderColorIcon />} title="deals count" value={`${deals}`} />
            <PanelCard ico={<MonetizationOnIcon />} title="today profit" value={`${res.profit} $`} />
            <PanelCard ico={<MonetizationOnIcon />} title="today profit" value={`${res.loss} $`} />
        </div>
        <hr />
        <div className={style["body-container"]}>
            <div className={style.charts}>
                <div>
                    <h3>balance chart</h3>
                    <BalanceChart y_data={BalanceChartVal} x_data={realProfitLossChartDate} />
                </div>
                <div>
                    <h3>profit chart</h3>
                    <ProfitLossChart x_data={profitLossChartDate} data={profitLossChartProfit} />

                </div>
            </div>
            <div className={style["cards-container"]}>
            </div>
        </div>
    </div>
}