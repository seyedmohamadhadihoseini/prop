"use client";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { usePathname, useRouter } from "next/navigation";

export default function SendNewTicketButton() {

    const router = useRouter();
    const pathname = usePathname();
    return <Button variant="contained" endIcon={<SendIcon />} onClick={e => {
        router.push(`${pathname}/new`);
    }}>
        New Ticket
    </Button>
}