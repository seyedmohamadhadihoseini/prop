import prisma from "@/services/singleton_prisma";
import { redirect, useSearchParams } from "next/navigation";

export default async function AdminApp({searchParams}:{
    searchParams: { [key: string]: string | undefined }
}) {
    await InitializeCheck(searchParams)
    return <div>
        Hello My Admin
    </div>
}
async function InitializeCheck(searchParams: { [key: string]: string | undefined }) {
    const hash = searchParams.hash;
    if(!hash){
        return redirect("/auth/login");
    }
    const admin = await GetAdmin(hash);
    if(!admin){
        return redirect("/auth/login");
    }
}
async function GetAdmin(hash: string) {
    return await prisma.admin.findUnique({
        where: {
            hash
        }
    })
}