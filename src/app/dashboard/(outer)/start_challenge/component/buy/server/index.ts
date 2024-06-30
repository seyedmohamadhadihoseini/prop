"use server";

import CurrentUser from "@/functions/CurrentUser";
import prisma from "@/services/singleton_prisma";
import NowPaymentsApi from '@nowpaymentsio/nowpayments-api-js'
import { InvoiceReturn } from "@nowpaymentsio/nowpayments-api-js/src/actions/create-invoice";
import { User } from "@prisma/client";
import { redirect } from "next/navigation";

async function nowPaymentConfig() {

    const nowPayment = await prisma.nowPaymentConfig.findFirst();
    return nowPayment
}
export async function BuyChallenge(challengeModelId: number) {
    const config = await nowPaymentConfig()
    const npApi = new NowPaymentsApi({ apiKey: config ? config.apiKey : `${process.env.NOW_PAYMENT_APIKEY}` });
    const user: User = await CurrentUser();
    const challengeModel = await prisma.challengeSetting.findUnique({
        where: {
            id: challengeModelId
        }
    });
    if (!challengeModel) {
        return;
    }
    const challenge = await prisma.challenge.create({
        data: {
            settingId: challengeModelId, userId: user.id, isPaid: false
        }
    });
    let inv = await npApi.createInvoice(
        {

            order_description: "pay for challenge",
            price_amount: challengeModel.price,
            price_currency: "usd", order_id: `${challenge.id}`,
            cancel_url: `${process.env.NEXT_PUBLIC_HOST}`,
            success_url: `${process.env.NEXT_PUBLIC_HOST}`,
            ipn_callback_url: `${process.env.NEXT_PUBLIC_HOST}/api/nowpayment?ipn=${process.env.NOW_PAYMENT_IPN_CHECK}`
        });
    inv = inv as InvoiceReturn;
    redirect(inv.invoice_url);
}