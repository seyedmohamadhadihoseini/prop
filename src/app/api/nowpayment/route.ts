import { NextRequest } from "next/server";
export async function POST(request: NextRequest) {
    const i_ipn = request.nextUrl.searchParams.get("ipn");
    const r_ipn = process.env.NOW_PAYMENT_IPN;
    if (i_ipn != r_ipn) {
        return Response.json({});
    }
    const body = await request.text();
    const response = JSON.parse(body);
    const order_id = response?.order_id;
    const status = response?.payment_status;
    console.log(`orderid:${order_id} and status=${status}`);
    return Response.json({});
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