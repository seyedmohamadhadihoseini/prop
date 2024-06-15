import { randomUUID } from "crypto";
import { writeFile } from "fs/promises";

export default async function SaveFileToPublicDir(file: any,pathFromPublic:String) {
    let extention = file.name.split(".").pop();
    if (!extention) {
        return null;
    }
    const storedName: string = randomUUID() + "." + extention;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const pathname = `./public/${pathFromPublic}/${storedName}`;
    await writeFile(pathname, buffer);
    return storedName;
}