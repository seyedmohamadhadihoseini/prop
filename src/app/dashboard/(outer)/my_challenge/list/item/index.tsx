import { Challenge } from "@prisma/client";
import style from "./style.module.css";
import prisma from "@/services/singleton_prisma";
import Link from "next/link";

export default async function ChallengeItem({ challenge }: { challenge: Challenge }) {
    const challengeModel = await prisma.challengeSetting.findUnique({
        where: {
            id: challenge.id
        }
    });
    if (!challengeModel) {
        return;
    }
    return <div className={style.main}>
        <Link href={`my_challenge/${challenge.id}`}>
        <h3>{challengeModel.name}</h3>
        <p>{challengeModel.balance}</p>
        <p>{challengeModel.description}</p>
        </Link>
    </div>
}