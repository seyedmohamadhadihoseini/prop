const Cryptr = require('cryptr');

const cryptr = new Cryptr(process.env.SECRET_KEY);

export function Cryptr_Encrypt(plain){
    return cryptr.encrypt(plain);
}
export function Cryptr_Decrypt(encrypted){
    return cryptr.decrypt(encrypted);
}

