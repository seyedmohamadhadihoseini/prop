
import { User, VerifySteps } from "@prisma/client";
import "./style.css";
import VerifyForm from "./VerifyForm";
import { GetUserWithoutCache } from "@/functions/CurrentUser";




export default async function Verify() {
    
    const user: any = await GetUserWithoutCache();
    if (user.verifyLevel == VerifySteps.Yes) {
        return <div style={{ width: "100%", color: "green" }}>
            <p>Successfully Verified</p>
        </div>
    }
    else if (user.verifyLevel == VerifySteps.Pending) {
        return <div style={{ width: "100%", color: "yellow" }}>
            <p>Pending for Confirm by Admin</p>
        </div>
    }
    else {
        let ifIsRejected = null;
        if (user.verifyLevel == VerifySteps.rejected) {
            ifIsRejected = <div style={{ width: "100%", color: "red", textAlign: "left" }}>
                <p>Rejected By Admin . try again</p>
            </div>
        }


        return <div >
            {ifIsRejected}
            <VerifyForm />
        </div>
    }

}