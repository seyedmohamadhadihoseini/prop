import prisma from "@/services/singleton_prisma";
import RefferalChallengeTable from "./challenge";
import CurrentUser from "@/functions/CurrentUser";
import { User } from "@prisma/client";
import style from "./style.module.css";
export default async function ReferralsApp() {
    const user: User = await CurrentUser();
    const rCount = await prisma.user.count({
        where: {
            parentReferralCode: user.referralCode
        }
    })



    return <div>
        <div className={style["referral-count"]}>
            <h4>your referral code : <b>{user.referralCode}</b></h4>
            <h4>your referral count : <b>{rCount}</b></h4>
        </div>
        <hr />
        <RefferalChallengeTable />
    </div>
}