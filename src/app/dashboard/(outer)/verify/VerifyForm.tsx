"use client";
import { Button } from "@mui/material";
import BasicDatePicker from "./DatePicker";
import ImageInput from "./ImageInput";
import SaveVerify from "./server";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
export default function VerifyForm() {
    const [state, formAction] = useFormState(SaveVerify, { id: 0, success: false, message: "" });
    const router = useRouter();
    useEffect(() => {
        if (state.message.length > 0) {
            if (state.success) {
                router.refresh();
            }
            else {
                toast.warn(state.message, { position: "top-left" });

            }
        }
    }, [state.id])
    return <form action={formAction} id="verification-form"    >

        <div className="form-element">
            {/* <label htmlFor="birth-date">birthDate :</label> */}
            <div id="birth-date">
                {/* <BasicDatePicker /> */}
            </div>
        </div>
        <div className="form-element">
            <label htmlFor="passport">passport or Cv Card :</label>
            <ImageInput />
        </div>
        <div id="button-div">
            <div></div>
            <Button type="submit" variant="contained" color="success" className="send-button">
                Send
            </Button>
            <div></div>
        </div>
    </form>
}