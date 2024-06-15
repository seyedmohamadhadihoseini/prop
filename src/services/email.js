const send = require('gmail-send');
export default async function SendGmail(to, subject, html) {

    const sendFunc = await send({
        user: "developermhadi@gmail.com",
        to,
        pass: "ptyvsbopauuiolnq",
        subject,
        html
    });
    const result = await sendFunc();
    return result;
}