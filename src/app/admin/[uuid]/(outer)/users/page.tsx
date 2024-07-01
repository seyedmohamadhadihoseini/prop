"use client";
import "./style.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import UserListItem from "./item";
import { useLayoutEffect, useState } from "react";
import { User } from "@prisma/client";
import GetUsers from "./server";
import Pagination from "@/components/pagination";
import SearchUsersServer from "./search/server";
import SeachUser from "./search";
import { SearchUser } from "./functions";
export default function UserList() {
    const [usersList, setUsersList] = useState<User[]>([]);
    const [usersListCopy, setUsersListCopy] = useState<User[]>([]);
    const [skip, setSkip] = useState(0);
    const take = 10;
    useLayoutEffect(() => {
        GetUsers(skip, take).then(result => {
            setUsersList(result);
            setUsersListCopy(result);
        });
    }, [skip])
    const displayUser = usersList.map(user => <UserListItem user={user} key={user.id} />)
    const changeHandler = async (value: string) => {
        setUsersList(SearchUser(usersListCopy, value));
    }
    const keyUpHandler = async (value: string) => {
        if (value.length == 0) {
            setUsersList(SearchUser(usersListCopy, value));
        }
    }

    return <div>
        <SeachUser changeHandler={changeHandler} keyUp={keyUpHandler} />
        <div className="row mt-3">
            <div className="col-lg-12">
                <div className="card">
                    <div className="">
                        <div className="table-responsive">
                            <table className="table user-list-table">
                                <thead>
                                    <tr>
                                        <th scope="col">profile</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Telephone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayUser}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Pagination skip={skip} setSkip={setSkip} take={take} />
    </div>
}