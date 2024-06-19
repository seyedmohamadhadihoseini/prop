"use client";
import style from "./style.module.css";
import { useState } from "react";
import GenereteNewAdminLink from "../server/AdminLink";
import { useRouter } from "next/navigation";

export default function AdminLinkPart({ uuid }: { uuid: string }) {
    const [adminLink, setAdminLink] = useState(`${process.env.NEXT_PUBLIC_HOST}/admin/${uuid}`);
    const router = useRouter();
    return <div className={style["main-container"]}>
        <h3>Admin link</h3><p>{adminLink}</p>

        <button onClick={async (e) => {
            const new_uuid = await GenereteNewAdminLink(uuid);
            setAdminLink(`${process.env.NEXT_PUBLIC_HOST}/admin/${new_uuid}`)
            router.push(`${process.env.NEXT_PUBLIC_HOST}/admin/${new_uuid}/setting`)
        }}>Change</button>
        <hr/>
    </div>
}