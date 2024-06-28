import { Challenge, ChallengeSetting, User } from "@prisma/client";
import { useLayoutEffect, useState } from "react";
import GetChallengeSetting, { GetUser } from "./server";
import style from "./style.module.css";
import { useRouter } from "next/navigation";
export default function OrderListItem({ challenge }: { challenge: Challenge }) {

    const [setting, setSetting] = useState<ChallengeSetting | null>();
    const router = useRouter();
    useLayoutEffect(() => {
        GetChallengeSetting(challenge.settingId).then(setSetting);
    }, [challenge])
    return <div className={`${style.main} ${challenge.isPaid && style.finished}`}>
        <button className={style["user-detail"]} onClick={e=>{
            router.push(`users/${challenge.userId}`);
        }}>
            User
        </button>
        <p>
            order_id:{challenge.id}
        </p>
        <p>
            status:{challenge.isPaid ? "Finshed" : "Pending"}
        </p>
        <p>
            price:{setting?.price}
        </p>
        <p>
            date : {challenge.date.toDateString()}
        </p>
    </div>
}