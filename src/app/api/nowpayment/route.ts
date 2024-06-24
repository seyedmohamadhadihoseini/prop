import { NextRequest } from "next/server";
export async function POST(request: NextRequest) {
    const i_ipn = request.nextUrl.searchParams.get("ipn");
    const r_ipn = process.env.NOW_PAYMENT_IPN;
    if (i_ipn != r_ipn) {
        return Response.json({});
    }
    const body = await request.text();
    console.log(body);
    return Response.json({});
}