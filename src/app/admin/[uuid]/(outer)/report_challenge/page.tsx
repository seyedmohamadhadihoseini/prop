"use client";

import { useLayoutEffect, useState } from "react";
import GetChallenges, { SearchUser } from "./server";
import { Challenge } from "@prisma/client";
import Pagination from "@/components/pagination";
import ReportChallengeItem from "./item";
import style from "./style.module.css";
export default function ReportChallengeApp() {
    const take = 10;
    const [skip, setSkip] = useState(0);
    const [challenges, setChallenges] = useState<Challenge[]>([]);
    const [search, setSearch] = useState("");
    useLayoutEffect(() => {
        GetChallenges(skip, take).then(setChallenges);
    }, [skip]);
    const displayChallenges = challenges.map(ch => <ReportChallengeItem challenge={ch} key={ch.id} />)
    return <div>
        <div className={style.main}>
            <input type="text" className={style.filter} placeholder="enter user email" value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyUp={async (e) => {
                    setChallenges(await SearchUser(search));
                }}
            />
            {displayChallenges}
        </div>
        <Pagination setSkip={setSkip} skip={skip} take={take} />
    </div>

}