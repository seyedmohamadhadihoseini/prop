"use client";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { usePathname, useRouter } from "next/navigation";

export default function SendNewMessageTicket() {

    const router = useRouter();
    const pathname = usePathname();
    return <Button variant="contained" endIcon={<SendIcon />} onClick={e => {
    }}>
        Send
    </Button>
}