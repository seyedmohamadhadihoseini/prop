import { ChallengeSetting } from "@prisma/client";
import style from "./style.module.css";
import Link from "next/link";
export default function ChallengeItem({ setting }: { setting: ChallengeSetting }) {

    return <Link href={`challenge/${setting.id}`} className={style.main}>
        <p>
            name : {setting.name}
        </p>
        <p>
            balance :{setting.balance}
        </p>
        <p>
            price :{setting.price}
        </p>
    </Link>
}