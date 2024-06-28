"use server";
import { readFileSync } from "fs";
import path from 'path'
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    let imageName = request.nextUrl.searchParams.get("name");
    if (imageName == "null") {
        imageName = "avatar.png";
    }
    const filePath = path.resolve('.', `public/users/img/${imageName}`);
    let imageBuffer;
    try {
        imageBuffer = readFileSync(filePath);
    }
    catch {
    }
    const response = new NextResponse(imageBuffer);
    response.headers.set("content-type", "image/jpg");
    return response;
}