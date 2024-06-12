"use server";

import { redirect } from "next/navigation";
import ValidateRegisterStart from "./validate";
import SetConfirm from "./setConfirm";
import FormResultState from "@/lib/types/FormResultState";

export default async function RegisterStart(prevState: FormResultState, formData: FormData) {

    const rawData = Object.fromEntries(formData);
    const email = rawData.email.toString();
    const password = rawData.password.toString();
    const validateResult: boolean = await ValidateRegisterStart(email, password);

    
    if (validateResult) {
        await SetConfirm(email, password);
        return redirect("/auth/register/confirm_code");
    }

    return {
        id: prevState.id + 1 + Math.random(),
        success: false,
        message: "username already exist"
    }

}