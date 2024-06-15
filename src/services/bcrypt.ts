
import bcrypt from "bcrypt";


export async function Hash(plainText: string) {
    const hashed = await bcrypt.hash(plainText, 13);
    return hashed;
}

export async function Compare(plainText: string, hashed: string) {
    const isSame = await bcrypt.compare(plainText, hashed);

    return isSame;
}