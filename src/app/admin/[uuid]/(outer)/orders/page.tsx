import { useState } from "react";
import style from "./style.module.css";
import OrdersList from "./list";
import prisma from "@/services/singleton_prisma";

export default async function OrdersApp() {

    const challenges = await prisma.challenge.findMany({include:{setting:true,user:true}});

    return <div className={style.main}>

        <div className="order-list">
            <OrdersList  challenges={challenges} />
        </div>

    </div>
}