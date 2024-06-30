import CurrentUser from "@/functions/CurrentUser";
import prisma from "@/services/singleton_prisma";
import { User } from "@prisma/client";
import ChallengeItem from "./item";
import MyChallengeTable from "./table";
import { SetNewHistoryRecord, UpdateTodayRecord } from "../[id]/analyze/server";


export default async function ChallengesList() {
    const user: User = await CurrentUser();
    const list = await prisma.challenge.findMany({
        where: {
            AND: [
                { userId: user.id },
                { isPaid: true }
            ]
        }
    });
    const displayList = list.map(i => {
        if (!i.isIntervaled) {
            setInterval(() => {
                SetNewHistoryRecord(i.MT5 || "")
                UpdateTodayRecord(i.MT5 || "");
            }, 1000 * 60 * 60 * 12)
        }
        return <ChallengeItem challenge={i} />
    })

    return <MyChallengeTable displayList={displayList} />



}