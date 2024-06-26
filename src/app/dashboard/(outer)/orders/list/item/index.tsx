import { Challenge, ChallengeSetting } from "@prisma/client";
import { useLayoutEffect, useState } from "react";
import GetChallengeSetting from "./server";
import style from "./style.module.css";
export default function OrderListItem({ challenge }: { challenge: Challenge }) {

    const [setting, setSetting] = useState<ChallengeSetting | null>();
    useLayoutEffect(() => {
        GetChallengeSetting(challenge.settingId).then(setSetting);
    }, [challenge])
    return <div className={`${style.main} ${challenge.isPaid && style.finished}`}>
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