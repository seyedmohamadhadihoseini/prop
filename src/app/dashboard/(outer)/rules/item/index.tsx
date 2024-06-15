"use client";
import "./style.css";
import { useRef } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function RuleItem({ header, content }: { header: string, content: string }) {
    const completeRef = useRef<HTMLDivElement>(null);
    return <div className="rule-item-div" onClick={e => {
        let display = "none";
        if (completeRef.current!.style.display == "none") {
            display = "block";
        }
        completeRef.current!.style.display = display;
    }}>
        <div className="rule-item-header">
            <h3>{header}</h3>
            <div>
                <ArrowDropDownIcon />
            </div>
        </div>
        <div  style={{ display: "none" }} ref={completeRef} >
            <pre className="content-item">
                {content}
            </pre>
        </div>
    </div>
}