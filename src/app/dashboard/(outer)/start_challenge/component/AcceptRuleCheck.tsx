import Link from "next/link";
import { RefObject } from "react";


export default function AcceptRuleCheck({ paymentRef }: { paymentRef: RefObject<HTMLDivElement> }) {

    return <div className="accept-rule-check">
        <div className="form-group py-2">
            <div className="icheck-material-white">
                <input type="checkbox" id="user-checkbox1" onChange={e => {
                    let display = "none";
                    if (e.target.checked) {
                        display = "grid";
                    }
                    paymentRef.current!.style.display = display;
                    setTimeout(() => {
                        const chatH = document.getElementsByClassName("start-challenge-container")[0];
                        chatH?.scrollTo(0, chatH?.scrollHeight);
                    }, 1000);
                }} />
                <label htmlFor="user-checkbox1">I read and Agree  '
                    <Link href="/dashboard/rules" style={{ color: "red" }}>
                        Terms & Conditions
                    </Link>'
                </label>
            </div>
        </div>
    </div>
}