"use client";
import Modal from "@/components/modal";
import NewAccountButton from "./NewAccButton";
import style from "./style.module.css";
import { useState } from "react";
import NewMT5 from "./new";
import AccountsTable from "./AccountsTable";
export default function Mt5AddApp() {
    const [isModalShow, setIsModalShow] = useState(false);
    return <div>
        <NewAccountButton clickHandler={() => {
            setIsModalShow(true);
        }} />
        <div className={isModalShow ? style["modal-show"] : style["modal-hidden"]}>
            <Modal content={<NewMT5/>} modalClose={setIsModalShow} />
        </div>
        <hr />
        <AccountsTable/>
        <br />
    </div>
}