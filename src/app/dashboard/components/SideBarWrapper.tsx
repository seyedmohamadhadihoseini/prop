"use client";
import Link from "next/link";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ForumIcon from '@mui/icons-material/Forum';
import { usePathname } from "next/navigation";
import GavelIcon from '@mui/icons-material/Gavel';
export default function SideBarWrapper() {
    const pathname = usePathname();

    function MyMenuItem({ href, title, ico, isActive }: { href: string, title: string, ico: React.ReactNode, isActive: boolean }) {
        return <li className={isActive ? "active" : ""}>
            <Link href={href}>
                {ico} <span>{title}</span>
            </Link>
        </li>
    }
    const menuArr = [
        { href: "/dashboard/profile", title: "Profile", ico: <AccountBoxIcon />  },
        { href: "/dashboard", title: "Dashboard", ico: <DashboardIcon /> },
        { href: "/dashboard/start_challenge", title: "Start New Challenge", ico: <AddCircleOutlineIcon /> },
        { href: "/dashboard/my_challenge", title: "My Challenges", ico: <AcUnitIcon /> },
        { href: "/dashboard/verify", title: "Verify", ico: <FingerprintIcon /> },
        { href: "/dashboard/ticket", title: "Ticket", ico: <ForumIcon /> },
        { href: "/dashboard/rules", title: "Rules", ico: <GavelIcon /> },

    ].map(item => {
        return <MyMenuItem key={item.href} href={item.href} ico={item.ico} title={item.title} isActive={item.href===pathname} />;
    })
    return <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
        <ul className="sidebar-menu do-nicescrol">
            <li className="sidebar-header">menu</li>
            {menuArr}

           
        </ul>

    </div>

}