"use client";
import "./style.css";
export default function MyComboBox({ arr,state, setState}: { arr: string[],state:string, setState: (x:string)=>void }) {

    const displayMap = arr.map(item => {
        return <button key={item} className={`combo-button ${state===item&&"active"}` } onClick={e => {
            setState(item)
        }}>{item}</button>
    })
    return <div className="button-group">
        {displayMap}
    </div>
}