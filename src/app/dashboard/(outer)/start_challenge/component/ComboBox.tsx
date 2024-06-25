"use client";
import { ChallengeSetting } from "@prisma/client";
import ChallengePart from "../challenge";
import "./style.css";
export default function MyComboBox({ arr, state, setState }: { arr: ChallengeSetting[], state: any, setState: (x: any) => void }) {

    const displayMap = arr.map(item => {
        return <button key={item.id} title={item.description} className={`combo-button ${state === item.id && "active"}`} onClick={e => {
            if (item.isEnable) {

                setState(item.id)
            }
        }}><ChallengePart challenge={item} /></button>
    })
    return <div className="button-group">
        {displayMap}
    </div>
}