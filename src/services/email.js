"use server";
import prisma from "./singleton_prisma";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "mail.algorixfinance.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "notify@algorixfinance.com",
        pass: "c.j,T4*6_BsI",
    },
});
export default async function SendGmail(to, subject, html) {
    const config = await prisma.mailConfiguration.findFirst();
    const info = await transporter.sendMail({
        from: config.user, // sender address
        to, // list of receivers
        subject, // Subject line
        html, // html body
    });
    return info;
}
async function GetMailConfig(config) {

    const transporter = nodemailer.createTransport({
        host: config.host,
        port: config.port,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: config.user,
            pass: config.pass,
        },
    });
}

// const send = require('gmail-send');
// export default async function SendGmail(to, subject, html) {

//     const sendFunc = await send({
//         user: "developermhadi@gmail.com",
//         to,
//         pass: "ptyvsbopauuiolnq",
//         subject,
//         html
//     });
//     const result = await sendFunc();
//     return result;
// }