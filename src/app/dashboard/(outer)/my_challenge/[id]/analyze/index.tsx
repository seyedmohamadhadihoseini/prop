

import { Challenge } from "@prisma/client";
import { useEffect } from "react";
import { GetFromMT5, GetUserHistory, SetNewHistoryRecord, UpdateTodayRecord } from "./server";
import AnalyzePanel from "./panel";


export default async function AnalyzePartApp({ challenge }: { challenge: Challenge }) {

    if (!challenge.MT5) return;
    const res = await GetFromMT5(challenge.MT5);
    if (!res) return;

    await SetNewHistoryRecord(challenge.MT5);
    await UpdateTodayRecord(challenge.MT5);
    const histories = await GetUserHistory(challenge.MT5);


    return <div>
        <AnalyzePanel histories={histories} res={res} username={challenge.MT5}/>
    </div>
}