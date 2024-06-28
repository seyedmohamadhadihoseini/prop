"use client";
import { User } from "@prisma/client";
import PrElements from "./elements";
import PR_Email from "./elements";
import "./style.css";
import { useEffect, useLayoutEffect, useState } from "react";
import UpdateProfile, { GetUser } from "./server";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function Profile() {
    const [user, setUser] = useState<User | null>();
    const [state, formAction] = useFormState(UpdateProfile, { id: 0, message: "", success: false });
    useEffect(() => {
        if (state.message.length > 0) {
            if (state.success) {
                toast.success(state.message);
            } else {
                toast.warn(state.message);
            }
        }
    }, [state])
    useLayoutEffect(() => {
        GetUser().then(setUser);
    }, [])
    if (!user) {
        return <div></div>
    }
    const elements = PrElements;
    return <div className="row mt-3">
        <div className="col-lg-12">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">Profile</div>
                    <hr />
                    <form action={formAction}>
                        <div className="form-group sp-container">
                            <elements.PR_Name defaultVal={user.firstName} />
                            <elements.PR_LastName defaultVal={user.lastName} />
                        </div>
                        <div className="form-group">
                            <elements.PR_Email defaultVal={user.email} />
                        </div>
                        <div className="form-group">
                            <elements.PR_Mobile defaultVal={user.telephone} />
                        </div>
                        <div className="form-group">
                            <elements.PR_BirthDate defaultVal={user.brithDate} />
                        </div>
                        <div className="form-group">
                            <elements.PR_Address defaultVal={user.address} />
                        </div>
                        <div className="form-group sp-container">
                            <elements.PR_Password />
                            <elements.PR_ConfirmPassword />
                        </div>
                        <div className="form-group py-2">
                            <elements.PR_Profile />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-light px-5"><i className="icon-lock"></i> Change</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}