"use client";
import { User } from "@prisma/client";
import "./style.css";
import Link from "next/link";
import DetermineUserVerfication from "./server";
import { usePathname, useRouter } from "next/navigation";
export default function VerifyUserItem({ user, uuid }: { user: User, uuid: string }) {

    const router = useRouter();
    const identityImg = `/api/file/get_identity?name=${user.identity}`;
    return <div className="verify-card">
        <div className="identity-img">
            <Link
                href={identityImg}>
                <img src={`${process.env.NEXT_PUBLIC_HOST}${identityImg}`} />
            </Link>
        </div>
        <div className="user-detail-div">
            <Link href={`/admin/${uuid}/users/${user.id}`}>User Detail</Link>
        </div>
        <div className="determine-status">
            <button id="confirm-verify" onClick={async (e) => {
                await DetermineUserVerfication(user.id, "Yes");
                router.refresh();
            }}>Confirm</button>
            <button id="reject-verify" onClick={async (e) => {
                await DetermineUserVerfication(user.id, "rejected");
                router.refresh();
            }}>Reject</button>

        </div>
    </div>
}