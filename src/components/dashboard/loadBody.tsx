"use client";

import { useLayoutEffect } from "react";

export default function LoadBody(){
    useLayoutEffect(()=>{
        document.getElementsByTagName("body")[0].className ="bg-theme bg-theme1";
        document.getElementsByTagName("body")[0].style.fontSize = "20px";
    })
    return <></>
}