"use client";
import { User } from "@prisma/client";
import Image from "next/image";
import "./style.css";
import { useRouter } from "next/navigation";
export default function UserListItem({ user }: { user: User }) {
    const router = useRouter();
    return  <tr className="user-list-item" onClick={e=>{
        router.push(`users/${user.id}`);
    }}>

            <th scope="row">
                <Image src={`/api/file/get_profile?name=${user.profile}`}
                    alt={user.email} width={100} height={50}
                />
            </th>
            <td>{`${user.firstName} ${user.lastName}`}</td>
            <td>{user.email}</td>
            <td>{user.telephone}</td>
        </tr>

}