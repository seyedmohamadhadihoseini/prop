"use server";

import prisma from "@/services/singleton_prisma";


export async function GetUserHistory(username: string) {
    return await prisma.history.findMany({
        where: {
            username
        }
    })
}
export async function UpdateTodayRecord(username: string) {
    const res = await GetFromMT5(username);
    if (!res) {
        return
    }
    const balance = res.balance;

    const y_balance = await dayShiftBalance(username, 1) || balance;
    if (y_balance == balance) {
        return;
    }
    const loss = y_balance > balance ? (balance - y_balance) : 0;
    const profit = balance > y_balance ? (balance - y_balance) : 0;
    let drawdown = (y_balance > balance) ? ((y_balance - balance) / y_balance) * 100 : 0;
    drawdown = parseFloat(drawdown.toFixed(3));
    const date = new Date().toISOString().split("T")[0];



    await prisma.history.update({
        where: {
            username_date: {
                date, username
            }
        },
        data: {
            balance: balance, drawdown, loss, profit
        }
    })
}
export async function SetNewHistoryRecord(username: string) {
    const today = new Date();
    const date = today.toISOString().split("T")[0];

    const count = await prisma.history.count({
        where: {
            date
        }
    });
    if (count == 0) {
        const res = await GetFromMT5(username);
        if (!res) {
            return;
        }
        const balance = res.balance;
        await prisma.history.create({
            data: {
                date, username, balance, profit: 0, loss: 0, drawdown: 0
            }
        })
    }
}
async function dayShiftBalance(username: string, shift: number) {

    let yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - shift);
    const yesterday = yesterdayDate.toISOString().split("T")[0];
    const yesterdayBalance = await prisma.history.findUnique({
        where: {
            username_date: {
                username, date: yesterday
            }
        }
    })
    return yesterdayBalance?.balance;
}

export async function GetFromMT5(username: string) {

    // return {
    //     balance: Math.random()>0.5?10000:9000, deals: 5
    // }
    const acc = await prisma.mT5Account.findUnique({
        where: {
            accountNumber: username
        }
    });
    if (!acc) {
        return
    }
    const mt5Ip = `${process.env.MT5_ADDRESS}/${acc.server}/${acc.accountNumber}/${acc.password}`;
    const response = await fetch(mt5Ip,{next:{revalidate:60}});
    console.log(response);
    if (!response.ok) {
        return false;
    }
    const responseText = await response.text();
    const responseJson = JSON.parse(responseText);
    if (!responseJson.success) {
        return false;
    }
    return responseJson;
}
// export async function GetUserHistory() {

// }
// export async function GetUserHistory() {

// }
// export async function GetUserHistory() {

// }
