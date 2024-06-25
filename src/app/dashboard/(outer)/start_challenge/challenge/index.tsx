import { ChallengeSetting } from "@prisma/client";
import style from "./style.module.css";

export default function ChallengePart({ challenge }: { challenge: ChallengeSetting }) {
    return <div className={style["main-container"]} >
        <h5>{challenge.name}</h5>
        <p>{challenge.balance} $</p>
        <p>{challenge.price} $</p>
    </div>
}