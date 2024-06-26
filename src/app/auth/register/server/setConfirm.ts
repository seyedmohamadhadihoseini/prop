import { Hash } from "@/services/bcrypt";
import SendMail from "@/services/email";
import prisma from "@/services/singleton_prisma";
import { randomUUID } from "crypto";
import { cookies } from "next/headers";



export default async function SetConfirm(email: string, password: string) {

    // generate code 
    // generate session
    // store code with session in db
    // send mail

    const code = generateCode();
    const sessionId = GenerateSession();
    const hashedPassword = await Hash(password);
    const pr1 = StoreToDb(sessionId, code.toString(), email, hashedPassword);
    const pr2 = SendMail(email, "confirm code", `
        <div>
            <p>
                your confirm code is <strong><b>${code}</b></strong>
            </p>

        </div>
    `);
    await Promise.all([pr1, pr2]);
}
function generateCode() {
    return Math.floor(100000 + Math.random() * 899999);
}
function GenerateSession() {
    const sessionId: string = randomUUID();
    cookies().set("sessionId__", sessionId, { secure: true, httpOnly: true });
    return sessionId;
}
async function StoreToDb(sessionId: string, code: string, email: string, password: string) {
    await prisma.confirmCode.create({
        data: {
            id: sessionId,
            code,
            email,
            password
        }
    })
}