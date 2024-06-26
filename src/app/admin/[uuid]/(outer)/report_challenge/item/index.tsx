import { Challenge, ChallengeSetting, User } from "@prisma/client";
import { useLayoutEffect, useState } from "react";
import { GetChallengeSetting, GetUser } from "./server";
import style from "./style.module.css";
export default function ReportChallengeItem({ challenge }: { challenge: Challenge }) {
    const [setting, setSetting] = useState<ChallengeSetting | null>();
    const [user, setUser] = useState<User | null>();
    useLayoutEffect(() => {
        GetChallengeSetting(challenge.settingId).then(setSetting);
        GetUser(challenge.userId).then(setUser);
    }, []);
    return <div className={`${style.main} ${challenge.isPaid && style.paid}`}>
        <p>
            {setting?.name}
        </p>
        <p>
            {user?.email}
        </p>
        <p>
            {setting?.price}
        </p>
        <p>
            date:{challenge.date.toDateString()}
        </p>
        <p>
            isPaid:{challenge.isPaid ? "paid" : "pending"}
        </p>

    </div>
}