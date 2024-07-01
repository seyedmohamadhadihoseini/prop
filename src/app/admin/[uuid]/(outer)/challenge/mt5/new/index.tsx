"use client";

import { ChallengeSetting } from "@prisma/client";
import { useEffect, useState } from "react";
import SaveNewMt5Account, { GetAllChallengeSetting } from "./server";
import style from "./style.module.css";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
export default function NewMT5() {
    const [models, setModels] = useState<ChallengeSetting[]>([]);
    const [state, formAction] = useFormState(SaveNewMt5Account, { id: 0, message: "", success: false });
    useEffect(() => {
        if (state.message.length > 0) {
            if (state.success) {
                toast.success(state.message);
            } else {
                toast.warn(state.message);
            }
        }
    }, [state])
    useEffect(() => {
        GetAllChallengeSetting().then(setModels);
    }, [])
    const displayModels = models.map(model => <option key={model.id} value={model.id}>{model.name}</option>)

    return <div className="col-lg-12" style={{ backgroundColor: "blue" }}>
        <div className="card">
            <div className="card-body">
                <form action={formAction}>
                    <div className="form-group">
                        <select name="setting" id="" className={style["ch-setting"]}>
                            {displayModels}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="now-config-server">Server</label>
                        <input type="text" name="acc-server" className="form-control" id="now-config-server" placeholder="Enter Server Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-1">account number</label>
                        <input type="number" name="acc-no" className="form-control" id="input-1" placeholder="Enter Account number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-4">Password</label>
                        <input type="text" name="acc-pass" className="form-control" id="input-4" placeholder="Enter Password" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-light px-5"><i className="icon-lock"></i> Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}