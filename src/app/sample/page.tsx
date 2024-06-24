"use client"
import NowPaymentsApi from '@nowpaymentsio/nowpayments-api-js'
import { useEffect, useState } from 'react';

const npApi = new NowPaymentsApi({ apiKey: "50ZKY1K-VZDMZZM-GW7SPB0-GSR10GR" });
export default function SampleApp() {
    const [status, setStatus] = useState("")
    useEffect(() => {
        async function fetchCurrencies() {
            const st = await npApi.createInvoice({price_amount:10,price_currency:"usd",order_id:"12355",cancel_url:"www.google.com",success_url:"www.google.com"});
            console.log(st);
        }
        fetchCurrencies()
    }, [])
    return <div>
        <h2>Available currencies</h2>
        <br />
        <p>{status}</p>
    </div>
}