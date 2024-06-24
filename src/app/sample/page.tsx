"use client"
import NowPaymentsApi from '@nowpaymentsio/nowpayments-api-js'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const npApi = new NowPaymentsApi({ apiKey: "50ZKY1K-VZDMZZM-GW7SPB0-GSR10GR" });
export default function SampleApp() {
    const router = useRouter();
    const [status, setStatus] = useState("")
    useEffect(() => {
        async function fetchCurrencies() {
            const st = await npApi.createInvoice({ price_amount: 10, price_currency: "usd", order_id: "12355", cancel_url: "www.google.com", success_url: "www.google.com", ipn_callback_url: "https://my.algorixfinance.com/api/nowpayment?ipn=51ff4f21-5f09-44b3-9fef-0e087e98280b" });
            console.log(st);
            router.push(st.invoice_url);
        }
        fetchCurrencies()
    }, [])
    return <div>
        <h2>Available currencies</h2>
        <br />

        <p>{status}</p>
    </div>
}
