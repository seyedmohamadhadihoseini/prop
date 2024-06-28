import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import referralSummary from "./server";

export default function ReferralsItem({ user }: { user: User }) {
    const [summary, setSummary] = useState<{AllCount:number, AllPrice:number}>();

    useEffect(() => {
        referralSummary(user).then(setSummary);
        

    }, []);
    if(!summary){
        return <tr></tr>
    }

    return <tr>
        <th scope="row">{user.id}</th>
        <td>{user.email}</td>
        <td>{summary.AllCount}</td>
        <td>{summary.AllPrice}</td>
    </tr>
}