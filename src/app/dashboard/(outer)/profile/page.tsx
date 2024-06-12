import { User } from "@prisma/client";
import PrElements from "./elements";
import PR_Email from "./elements";
import "./style.css";
import { GetUserWithoutCache } from "@/functions/CurrentUser";

export default async function Profile() {
    const user : User = await GetUserWithoutCache();
    
    const elements = PrElements;
    return <div className="row mt-3">
        <div className="col-lg-12">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">Profile</div>
                    <hr />
                    <form>
                        <div className="form-group sp-container">
                            <elements.PR_Name defaultVal={user.firstName}/>
                            <elements.PR_LastName defaultVal={user.lastName}/>
                        </div>
                        <div className="form-group">
                            <elements.PR_Email defaultVal={user.email} />
                        </div>
                        <div className="form-group">
                            <elements.PR_Mobile defaultVal={user.telephone}/>
                        </div>
                        <div className="form-group">
                            <elements.PR_Address defaultVal={user.address}/>
                        </div>
                        <div className="form-group sp-container">
                            <elements.PR_Password/>
                            <elements.PR_ConfirmPassword/>
                        </div>
                        <div className="form-group py-2">
                            <elements.PR_Profile/>
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