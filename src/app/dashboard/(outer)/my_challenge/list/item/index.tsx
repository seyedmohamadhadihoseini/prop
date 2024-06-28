import { Challenge } from "@prisma/client";

import prisma from "@/services/singleton_prisma";
import AssignMT5, { GetMT5Account } from "./server";
import ItemClient from "./client";

export default async function ChallengeItem({ challenge }: { challenge: Challenge }) {
    let account;
    if (!challenge.MT5) {
        account = await AssignMT5(challenge);
        if (account) {
            challenge.MT5 = account.accountNumber;
        }
    } else {
        account = await GetMT5Account(challenge.MT5);
    }
    const challengeModel = await prisma.challengeSetting.findUnique({
        where: {
            id: challenge.settingId
        }
    });
    if (!challengeModel) {
        return;
    }
    return <ItemClient account={account} challengeId={challenge.id} challengeModelName={challengeModel.name} />

}