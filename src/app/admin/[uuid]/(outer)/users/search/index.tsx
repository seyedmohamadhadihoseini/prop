"use client";

import { useState } from "react";
import style from "./style.module.css";

export default function SeachUser({ changeHandler, keyUp }: { changeHandler: any, keyUp: any }) {
    const [value, setValue] = useState("");
    return <div className={style.container}>
        <input type="text" value={value} onKeyUp={async (e) => {
            keyUp(value)
        }} onChange={async (e) => {
            setValue(e.target.value);
            await changeHandler(value);
        }} />
    </div>
}