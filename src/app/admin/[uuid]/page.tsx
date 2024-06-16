import prisma from "@/services/singleton_prisma";
import { redirect } from "next/navigation";

export default async function AdminApp({ params }: {
    params: { uuid: string }
}) {
    await InitializeCheck(params.uuid)
    return <div>
        Hello My Admin
    </div>
}
async function InitializeCheck(uuid: string) {

    const admin = await GetAdmin(uuid);
    if (!admin) {
        return redirect("/auth/login");
    }
    async function GetAdmin(uuid: string) {
        return await prisma.admin.findUnique({
            where: {
                uuid
            }
        })
    }
}