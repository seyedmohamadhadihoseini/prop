import DashboardLayoutComponent from "@/components/dashboard/layout";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ForumIcon from '@mui/icons-material/Forum';
import GavelIcon from '@mui/icons-material/Gavel';
export default function DashboardLayout({ children,params }: { children: React.ReactNode,params:{uuid:string} }) {
    const uuid = params.uuid;
    return <DashboardLayoutComponent
        SideBarData={[
            { href: `/admin/${uuid}/users`, title: "Users", ico: <FingerprintIcon /> },
            { href: `/admin/${uuid}/setting`, title: "settings", ico: <DashboardIcon /> },
            { href: `/admin/${uuid}/verify`, title: "Verify Users", ico: <FingerprintIcon /> },
            { href: `/admin/${uuid}/ticket`, title: "ticket", ico: <DashboardIcon /> },
            { href: `/admin/${uuid}/set_challenges`, title: "Set Challenges", ico: <AddCircleOutlineIcon /> },
            { href: `/admin/${uuid}/report_challenges`, title: "Report Challange", ico: <AddCircleOutlineIcon /> },
            { href: `/admin/${uuid}/payments`, title: "Payments", ico: <AcUnitIcon /> },
        ]}
        isForUser={false}
    >
        {children}
    </DashboardLayoutComponent>

}