"use server";
import { readFileSync } from "fs";
import path from 'path'
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const fileName = request.nextUrl.searchParams.get("name");
    const filePath = path.resolve('.', `public/ticket_file/${fileName}`);
    let imageBuffer;
    try {
        imageBuffer = readFileSync(filePath);
    }
    catch {
    }
    const response = new NextResponse(imageBuffer);
    
    response.headers.set("Content-Disposition", `attachment; filename=${fileName}`);
    return response;
}