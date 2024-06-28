import { ChallengeSetting, MT5Account } from "@prisma/client";
import { useLayoutEffect, useState } from "react";
import { GetChallengeSettingById } from "./server";

export default function Mt5Item({ mt5Acc }: { mt5Acc: MT5Account }) {
    const [setting, setSetting] = useState<ChallengeSetting | null>();
    useLayoutEffect(() => {
        GetChallengeSettingById(mt5Acc.settingId).then(setSetting);
    }, [])
    return <tr>
        <td>{setting?.name}</td>
        <td>{mt5Acc.accountNumber}</td>
        <td>{mt5Acc.password}</td>
    </tr>;
}