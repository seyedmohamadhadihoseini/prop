
"use client";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export default function NewAccountButton({ clickHandler }: { clickHandler: any }) {

  
    return <Button variant="contained" endIcon={<SendIcon />}
        onClick={clickHandler}>
        New MT5 Account
    </Button>
}