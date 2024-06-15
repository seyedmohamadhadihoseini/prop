import { GetUserWithoutCache } from "@/functions/CurrentUser";
import { User } from "@prisma/client";
import Link from "next/link";

export default async function TabBarHeader({ isForUser }: { isForUser: boolean }) {
    let user: User | null = null;
    if (isForUser) {
        user = await GetUserWithoutCache();
    }

    return <header className="topbar-nav">
        <nav className="navbar navbar-expand fixed-top">
            <ul className="navbar-nav mr-auto align-items-center">
                <li className="nav-item">
                    <Link className="nav-link toggle-menu" href="#">
                        <i className="icon-menu menu-icon"></i>
                    </Link>
                </li>

            </ul>

            {user && <UserProfile user={user} />}

        </nav>
    </header>
}
function UserProfile({ user }: { user: User }) {

    return <ul className="navbar-nav align-items-center right-nav-link">
        <li className="nav-item">
            <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown" href="#">
                <span className="user-profile"><img src={`${process.env.PUBLIC_NEXT_HOST}/api/file/get_profile?name=${user.profile}`} className="img-circle" alt="user avatar" /></span>
            </Link>
            <ul className="dropdown-menu dropdown-menu-right">
                <li className="dropdown-item user-details">
                    <Link href="#">
                        <div className="media">
                            <div className="avatar"><img className="align-self-start mr-3" src={`${process.env.PUBLIC_NEXT_HOST}/api/file/get_profile?name=${user.profile}`} alt="user avatar" /></div>
                            <div className="media-body">
                                <h6 className="mt-2 user-title">{`${user.firstName} ${user.lastName}`}</h6>
                                <p className="user-subtitle">{user.email}</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="dropdown-divider"></li>
                <li className="dropdown-item"><i className="icon-envelope mr-2"></i>

                </li>
                <li className="dropdown-divider"></li>
                <li className="dropdown-item"><i className="icon-wallet mr-2"></i>
                    <Link href="#">
                        Account
                    </Link>
                </li>
                <li className="dropdown-divider"></li>
                <li className="dropdown-item"><i className="icon-settings mr-2"></i>
                    <Link href="#">
                        Setting
                    </Link>
                </li>
                <li className="dropdown-divider"></li>
                <li className="dropdown-item"><i className="icon-power mr-2"></i>
                    <Link href="/api/auth/logout">
                        Logout
                    </Link>
                </li>
            </ul>
        </li>
    </ul>
}