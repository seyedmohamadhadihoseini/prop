// import { NextRequest } from "next/server";
import prisma from "@/services/singleton_prisma";
import * as crypto from "crypto";
import { FindFistMT5Account, GetChallengeById, GetChallengeSettingId } from "./helper";
export async function POST(request) {
    const i_ipn = request.nextUrl.searchParams.get("ipn");
    const r_ipn = process.env.NOW_PAYMENT_IPN_CHECK;
    if (i_ipn != r_ipn) {
        return Response.json({});
    }
    const xHeader = `${request.headers.get("x-nowpayments-sig")}`;
    const notificationsKey = `${process.env.NOW_PAYMENT_IPN}`;
    const body = await request.text();
    const response = JSON.parse(body);
    const hmac = crypto.createHmac('sha512', notificationsKey);
    hmac.update(JSON.stringify(sortObject(response)));
    const signature = hmac.digest('hex');
    if (signature != xHeader) {
        return response.json({});
    }
    const order_id = response?.order_id;
    const status = response?.payment_status;
    if (status == "finished") {
        // const challengeId = parseInt(`${order_id}`);
        // const challenge = await GetChallengeById(challengeId);
        // const acc = await FindFistMT5Account(challenge.settingId);
        
        await prisma.challenge.update({
            where: {
                id: challengeId
            },
            data: {
                isPaid: true
            }
        });

    }
    console.log(`orderid:${order_id} and status=${status}`);
    return Response.json({});
}
function sortObject(obj) {
    return Object.keys(obj).sort().reduce(
        (result, key) => {
            result[key] = (obj[key] && typeof obj[key] === 'object') ? sortObject(obj[key]) : obj[key]
            return result
        },
        {}
    )
}
const rt = {
    "actually_paid": 0,
    "actually_paid_at_fiat": 0,
    "fee": { "currency": "btc", "depositFee": 0, "serviceFee": 0, "withdrawalFee": 0 },
    "invoice_id": 5781891653, "order_description": null, "order_id": "12355",
    "outcome_amount": 0.0001279, "outcome_currency": "btc", "parent_payment_id": null,
    "pay_address": "TAE7Qgda22uudMCA85E3iuq94QUPGsJC2a", "pay_amount": 9.957785,
    "pay_currency": "usdttrc20", "payin_extra_id": null, "payment_extra_ids": null,
    "payment_id": 5629793529, "payment_status": "waiting",
    "price_amount": 10, "price_currency": "usd", "purchase_id": "5395052836",
    "updated_at": 1719211088600
};