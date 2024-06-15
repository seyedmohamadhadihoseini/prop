import DashboardLayoutComponent from "@/components/dashboard/layout";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ForumIcon from '@mui/icons-material/Forum';
import GavelIcon from '@mui/icons-material/Gavel';
export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    return <DashboardLayoutComponent
        SideBarData={[
            { href: "/admin/admins", title: "Admins", ico: <AccountBoxIcon /> },
            { href: "/admin/users", title: "Users", ico: <FingerprintIcon /> },
            { href: "/admin/setting", title: "Setting", ico: <DashboardIcon /> },
            { href: "/admin/set_challenges", title: "Set Challenges", ico: <AddCircleOutlineIcon /> },
            { href: "/admin/report_challenges", title: "Report Challange", ico: <AddCircleOutlineIcon /> },
            { href: "/admin/payments", title: "Payments", ico: <AcUnitIcon /> },
            { href: "/dashboard/ticket", title: "Ticket", ico: <ForumIcon /> },

        ]}
        isForUser={false}
    >
        {children}
    </DashboardLayoutComponent>

}