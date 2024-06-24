import CurrentUser from "@/functions/CurrentUser"
import prisma from "@/services/singleton_prisma"
import { User } from "@prisma/client"

export default async function DashboardReferral() {
    const user: User = await CurrentUser();
    const referralCount = await prisma.user.count({
        where: {
            referralCode: user.referralCode
        }
    })
    return <div>
        <h3>my referrals </h3>
        <label>referral count : {referralCount}</label>
    </div>
}