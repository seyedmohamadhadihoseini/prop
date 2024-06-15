"use client";
import "./style.css";
import { useRef, useState } from "react";
import MyComboBox from "./component/ComboBox";
import StepTable from "./component/StepTable";
import Link from "next/link";
import Image from "next/image";
import nowPayment from "@public/icon/now_payment.png";

export default function StartChallenge() {
    const [balance, setBalance] = useState("5000");
    const [server, setServer] = useState("Propridge dedicated server");
    const [platform, setPlatform] = useState("MT5");
    const [leverage, setLeverage] = useState("100");
    const paymentRef = useRef<HTMLDivElement>(null);

    return <div className="start-challenge-container">
        <div className="input-new-challenge">


            <div className="part-element">
                <h3>Account Balance</h3>
                <MyComboBox arr={["5000", "10000", "50000", "100000"]} setState={setBalance} state={balance} />
            </div>
            <div className="part-element">
                <h3>Choose Server</h3>
                <MyComboBox arr={["Propridge dedicated server", "Propridge dedicated server1"]} setState={setServer} state={server} />
            </div>

            <div className="part-element">
                <h3>platform</h3>
                <MyComboBox arr={["MT5"]} setState={setPlatform} state={platform} />
            </div>
            <div className="part-element">
                <h3>leverage</h3>
                <MyComboBox arr={["100"]} setState={setLeverage} state={leverage} />
            </div>
        </div>
        <hr />
        <StepTable />

        <div className="accept-rule-check">
            <div className="form-group py-2">
                <div className="icheck-material-white">
                    <input type="checkbox" id="user-checkbox1" onChange={e => {
                        console.log(paymentRef.current!.style.display);
                        let display = "none";
                        if (e.target.checked) {
                            display = "grid";
                        }
                        paymentRef.current!.style.display = display;
                        const chatH = document.getElementById("ticket-chat-history");
                        chatH?.scrollTo(0, chatH?.scrollHeight);
                    }} />
                    <label htmlFor="user-checkbox1">I read and Agree  '
                        <Link href="/dashboard/rules" style={{ color: "red" }}>
                            Terms & Conditions
                        </Link>'
                    </label>
                </div>
            </div>
        </div>

        <div className="payment-part" id="now-payment-pay" ref={paymentRef}>
            <h3>Buy:</h3>
            <div className="now-payment-logo">
                <Link href={""}>
                    <Image src={nowPayment} alt="now payment" width={100} />
                </Link>
            </div>

        </div>
        <br />
    </div>
}