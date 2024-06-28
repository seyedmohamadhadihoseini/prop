"use client";
import { MT5Account } from "@prisma/client";
import style from "./style.module.css";
import { useRouter } from "next/navigation";

export default function ItemClient(
    { challengeId, challengeModelName, account }: { challengeId: number, challengeModelName: string, account: MT5Account|null }) {
    const router = useRouter();

    return <tr className={style.main} onClick={e=>{
        router.push(`my_challenge/${challengeId}`)
    }}>
        <th scope="row">{challengeId}</th>
        <td>{challengeModelName}</td>
        <td>{account ? account.accountNumber : "waiting"}</td>
        <td>{account ? account.password : "waiting"}</td>
    </tr>
}