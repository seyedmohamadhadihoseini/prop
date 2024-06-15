import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ForumIcon from '@mui/icons-material/Forum';
import DashboardLayoutComponent from '@/components/dashboard/layout';
import GavelIcon from '@mui/icons-material/Gavel';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {


    return <DashboardLayoutComponent
    SideBarData={ [
        { href: "/dashboard/profile", title: "Profile", ico: <AccountBoxIcon />  },
        { href: "/dashboard", title: "Dashboard", ico: <DashboardIcon /> },
        { href: "/dashboard/start_challenge", title: "Start New Challenge", ico: <AddCircleOutlineIcon /> },
        { href: "/dashboard/my_challenge", title: "My Challenges", ico: <AcUnitIcon /> },
        { href: "/dashboard/verify", title: "Verify", ico: <FingerprintIcon /> },
        { href: "/dashboard/ticket", title: "Ticket", ico: <ForumIcon /> },
        { href: "/dashboard/rules", title: "Rules", ico: <GavelIcon /> },

    ]}
    isForUser={true}
    >
        {children}
    </DashboardLayoutComponent>
}