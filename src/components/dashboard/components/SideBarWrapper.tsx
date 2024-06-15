"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
export default function SideBarWrapper({menuData}:{menuData:{href:string,title:string,ico:any}[]}) {
    const pathname = usePathname();

    function MyMenuItem({ href, title, ico, isActive }: { href: string, title: string, ico: React.ReactNode, isActive: boolean }) {
        return <li className={isActive ? "active" : ""}>
            <Link href={href}>
                {ico} <span>{title}</span>
            </Link>
        </li>
    }
   
    const menuArr = menuData.map(item => {
        return <MyMenuItem key={item.href} href={item.href} ico={item.ico} title={item.title} isActive={item.href===pathname} />;
    })
    return <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
        <ul className="sidebar-menu do-nicescrol">
            <li className="sidebar-header">menu</li>
            {menuArr}

           
        </ul>

    </div>

}