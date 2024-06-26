"use client";
import { ChallengeSetting } from "@prisma/client";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import UpdateChallengeSetting from "./server";
import { toast } from "react-toastify";

export default function ChallengeEditForm({ challenge }: { challenge: ChallengeSetting }) {
    const updateAction = UpdateChallengeSetting.bind(null, challenge.id);
    const [state, formAction] = useFormState(updateAction, { id: 0, message: "", success: false });
    useEffect(() => {
        if (state.message.length > 0) {
            if (state.success) {
                toast.success(state.message);
            } else {
                toast.warn(state.message);
            }
        }
    }, [state])
    return <div className="row mt-3">
        <div className="col-lg-12">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">Update Challenge</div>
                    <hr />
                    <form action={formAction}>
                        <div className="form-group">
                            <label htmlFor="input-6">Name</label>
                            <input type="text" defaultValue={challenge.name} name="name" className="form-control form-control-rounded" placeholder="Enter Challenge Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-7">balance</label>
                            <input type="number" defaultValue={challenge.balance} name="balance" className="form-control form-control-rounded" id="input-7" placeholder="Enter  balance here" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-8">price</label>
                            <input type="number" defaultValue={challenge.price} name="price" className="form-control form-control-rounded" id="input-8" placeholder="Enter price here" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-9">description</label>
                            <textarea className="form-control" defaultValue={challenge.description} name="description" id="input-9" placeholder="Enter description" />
                        </div>
                        <div className="form-group py-2">
                            <div className="icheck-material-white">
                                <input type="checkbox" id="user-checkbox2" name="is-enable" defaultChecked={challenge.isEnable} />
                                <label htmlFor="user-checkbox2" >Enable</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-light btn-round px-5"><i className=""></i> Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}