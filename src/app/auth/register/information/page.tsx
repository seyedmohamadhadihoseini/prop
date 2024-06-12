


// form of get information from user

import SignUp from "@/components/register";
import SetRegisterInformatiom from "./server";

export default function InformationRegister(){

    return <SignUp actionHandler={SetRegisterInformatiom}/>



}