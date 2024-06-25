"use client";
import "./style.css";
import { useLayoutEffect, useRef, useState } from "react";
import MyComboBox from "./component/ComboBox";
import Link from "next/link";
import Image from "next/image";
import AcceptRuleCheck from "./component/AcceptRuleCheck";
import GetChallenges from "./server";
import { ChallengeSetting } from "@prisma/client";
import FullInformation from "./component/Information";
import BuyChallengePart from "./component/buy";

export default function StartChallenge() {
    const [allChallenges, setAllChallenges] = useState<ChallengeSetting[]>([]);
    const [challengeModel, setChallengeModel] = useState<number>(0);
    useLayoutEffect(() => {
        GetChallenges().then(challenges => {
            setAllChallenges(challenges);
            setChallengeModel(challenges[0].id)
        });
    }, []);
    const paymentRef = useRef<HTMLDivElement>(null);

    return <div className="start-challenge-container">
        <div className="input-new-challenge">

            <div className="part-element">
                <h3>Challenges</h3>
                <MyComboBox arr={allChallenges} state={challengeModel} setState={setChallengeModel} />
            </div>


        </div>
        <hr />
        <FullInformation header="Rules:"
            p1={["Min trading day's : 4", "Max trading day's : 30"]}
            p2={["Daily stop : 5%", "Total stop : 10%"]}
            p3={["Weekend free", "Reset Discount : -20%"]}
        />
        <FullInformation header="Add ons:"
            p1={["0 commission +1%"]}
            p2={["New's trading +3%", "Swap free +3%", "Levrage up to 500 +3%"]}
            p3={["Balance based +6%", "Unlimited trading day's +6%"]}
        />
        <AcceptRuleCheck paymentRef={paymentRef} />
        <BuyChallengePart paymentRef={paymentRef} challengeModelId={challengeModel} />

        <br />
    </div>
}