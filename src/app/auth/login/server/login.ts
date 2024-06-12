"use server";

import { redirect } from "next/navigation";
import ValidateLogin from "./validate";
import FormResultState from "@/lib/types/FormResultState";
import GrantSession from "@/functions/GrantSession";


export default async function LoginCheck(prevState: FormResultState, formData: FormData) {
    const rawData = Object.fromEntries(formData);

    const { email, password } = rawData;

    const { result, user } = await ValidateLogin(email.toString(), password.toString());

    if (result) {
        if (user) {
            await GrantSession(user.id)
        }
        return redirect("/dashboard");
    }
    return {
        id: prevState.id + 1 + Math.random(),
        success: result,
        message: result?"welcome to your panel":"username or password not correct"
    }
}