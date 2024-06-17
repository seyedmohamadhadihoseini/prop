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

    const info = await transporter.sendMail({
        from: 'notify@algorixfinance.com', // sender address
        to, // list of receivers
        subject, // Subject line
        html, // html body
    });
    return info;
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