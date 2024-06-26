import DashboardLayoutComponent from "@/components/dashboard/layout";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PaidIcon from '@mui/icons-material/Paid';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import ForumIcon from '@mui/icons-material/Forum';
import { AccountBox } from "@mui/icons-material";
export default function DashboardLayout({ children, params }: { children: React.ReactNode, params: { uuid: string } }) {
    const uuid = params.uuid;
    return <DashboardLayoutComponent
        SideBarData={[
            { href: `/admin/${uuid}/users`, title: "Users", ico: <GroupIcon /> },
            { href: `/admin/${uuid}/setting`, title: "settings", ico: <SettingsIcon /> },
            { href: `/admin/${uuid}/verify`, title: "Verify Users", ico: <FingerprintIcon /> },
            { href: `/admin/${uuid}/ticket`, title: "ticket", ico: <ForumIcon /> },
            { href: `/admin/${uuid}/challenge`, title: "Challenges Settings", ico: <AccountTreeIcon /> },
            { href: `/admin/${uuid}/report_challenge`, title: "Report Challenge", ico: <AcUnitIcon /> },
            { href: `/admin/${uuid}/payments`, title: "Payments", ico: <PaidIcon /> },
        ]}
        isForUser={false}
    >
        {children}
    </DashboardLayoutComponent>

}