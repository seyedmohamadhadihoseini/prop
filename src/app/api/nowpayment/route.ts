import { NextRequest } from "next/server";
import * as crypto from "crypto";
export async function POST(request: NextRequest) {
    const header = request.headers.get("x-nowpayments-sig");
    console.log(header);
    const body = await request.text();
    console.log(body);
    const hmac = crypto.createHmac('sha512', "zYNSPl4vuieLRShQLl0ECLHD/PJ6wYfU");
    hmac.update(JSON.stringify(sortObject(body)));
    const signature = hmac.digest('hex');
    if (signature == header) {
        console.log("the sign is true");
    }
    return Response.json({});
}

function sortObject(obj: any) {
    return Object.keys(obj).sort().reduce(
        (result: any, key) => {
            result[key] = (obj[key] && typeof obj[key] === 'object') ? sortObject(obj[key]) : obj[key]
            return result
        },
        {}
    )
}