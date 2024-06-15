import { User } from "@prisma/client"

class PR_Elements {
    PR_Name({defaultVal}:{defaultVal:string}) {
        
        return <div>
            <label htmlFor="pr_name">Name</label>
            <input type="text" name="first-name" defaultValue={defaultVal} className="form-control" id="pr_name" placeholder="Enter Your Name" />
        </div>
    }
    PR_LastName({defaultVal}:{defaultVal:string}) {
        return <div>
            <label htmlFor="pr_lastname">LastName</label>
            <input type="text" name="last-name" defaultValue={defaultVal} className="form-control" id="pr_lastname" placeholder="Enter Your LastName" />
        </div>
    }
    PR_Email({defaultVal}:{defaultVal:string}) {
        return <div>
            <label htmlFor="pr-email">Email</label>
            <input type="email" value={defaultVal} readOnly className="form-control" name="email" id="pr-email" placeholder="Enter Your Email Address" />
        </div>
    }
    PR_Password() {
        return <div>
            <label htmlFor="pr-password">Password</label>
            <input type="password" className="form-control" name="password" id="pr-password" placeholder="Enter Password" />
        </div>
    }
    PR_ConfirmPassword() {
        return <div>
            <label htmlFor="pr-confirm-password">Confirm Password</label>
            <input type="password" className="form-control" name="confirm-password" id="pr-confirm-password" placeholder="Confirm Password" />
        </div>
    }
    PR_Address({defaultVal}:{defaultVal:any}) {

        return <div>
            <label htmlFor="pr_address">Address</label>
            <input type="text" defaultValue={defaultVal} className="form-control" name="address" id="pr_address" placeholder="Enter Your Address" />
        </div>
    }
    PR_Profile() {

        return <div>
            <label htmlFor="pr_profile">Profile</label>
            <input type="file" className="form-control" name="profile" id="pr_profile" />

        </div>
    }
    PR_Mobile({defaultVal}:{defaultVal:any}) {
        return <div>
            <label htmlFor="pr_mobile">Mobile</label>
            <input type="string" defaultValue={defaultVal} className="form-control" name="mobile" id="pr_mobile" placeholder="Enter Your Telephone"/>
        </div>
    }

}



const PrElements =new PR_Elements();

export default PrElements;