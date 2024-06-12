
import Auth from "@/components/auth";
import RegisterStart from "./server/register";

export default function Register(){
    // return <SignUp actionHandler={RegisterStart}/>
    return <div>
        <Auth authType={"register"} actionHandler={RegisterStart}/>
    </div>
}