"use client"
import { Challenge, ChallengeSetting, User } from "@prisma/client";
import { useLayoutEffect, useState } from "react";
import GetChallengeSetting, { GetUser } from "./server";
import style from "./style.module.css";
import { useRouter } from "next/navigation";
export default function OrderListItem({ challenge }: { challenge: Challenge|any }) {
    // const [user, setUser] = useState<User | null>();
    // const [setting, setSetting] = useState<ChallengeSetting | null>();
    const router = useRouter();
    useLayoutEffect(() => {
        // GetChallengeSetting(challenge.settingId).then(setSetting);
        // GetUser(challenge.userId).then(setUser);
    }, [challenge])
    return <tr>
        <th scope="row">{challenge.id}</th>
        <td>{challenge.user?.email}</td>
        <td>{challenge.isPaid ? "Finshed" : "Pending"}</td>
        <td>{challenge.paidPrice ? challenge.paidPrice : challenge.setting?.price}</td>
        <td>{challenge.date.toDateString()}</td>
    </tr>

}