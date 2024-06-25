import Image from "next/image";
import nowPayment from "@public/icon/now_payment.png";
import { RefObject } from "react";
import style from "./style.module.css";
import { BuyChallenge } from "./server";
export default function BuyChallengePart({ challengeModelId, paymentRef }: { challengeModelId: number, paymentRef: RefObject<HTMLDivElement> }) {


    return <div className="payment-part" id="now-payment-pay" ref={paymentRef}>
        <h3>Buy:</h3>
        <div className="now-payment-logo">
            <div className={style["inner-container"]} onClick={async (e) => {
                await BuyChallenge(challengeModelId);
            }}>
                <Image src={nowPayment} alt="now payment" width={100} />
            </div>
        </div>
    </div>
}