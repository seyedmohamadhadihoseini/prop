
async function CreateInvoice() {
    const data = {
        price_amount: 1000,
        price_currency: "usd",
        order_id: "RGDBP-21314",
        order_description: "Apple Macbook Pro 2019 x 1",
        ipn_callback_url: "https://nowpayments.io",
        success_url: "https://nowpayments.io",
        cancel_url: "https://nowpayments.io"
    }
    const apiKey = `${process.env.NOW_PAYMENT_APIKEY}`;
    const response = await fetch("https://api.nowpayments.io/v1/invoice", {
        method: "POST",
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}
