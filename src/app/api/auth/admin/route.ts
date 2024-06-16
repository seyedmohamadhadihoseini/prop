import prisma from "@/services/singleton_prisma";
import { NextRequest } from "next/server";

export  async function GET(request: NextRequest) {
    let result = false;
    const uuid = request.nextUrl.searchParams.get("uuid");
    if (uuid) {
        const count = await prisma.admin.count({
            where: {
                uuid
            }
        })
        result = count > 0;
    }
    return Response.json({
        result
    })
}