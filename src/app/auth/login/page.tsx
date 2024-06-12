import Auth from "@/components/auth";
import LoginCheck from "./server/login";

export default function Login(){
    return <div>
        <Auth authType="login" actionHandler={LoginCheck}/>
    </div>
}