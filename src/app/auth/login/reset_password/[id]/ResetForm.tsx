"use client";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';
import ActionForResetPassword from './server';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


const defaultTheme = createTheme();

export default function ResetFormDisplay({ email }: { email: string }) {
    const newAction = ActionForResetPassword.bind(null, email);
    const [state, formAction] = useFormState(newAction, { id: 0, success: true, message: "" });
    const router = useRouter();
    useEffect(() => {
        if(state.message.length>0){

            if (!state.success) {
                toast.warn(state.message, {
                    position: "top-left"
                });
            }
            else {
                toast.success(state.message, {
                    position: "top-left"
                })
                router.push("/");
            }
        }
    }, [state.id])
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Change Password
                    </Typography>
                    <Box component="form" action={formAction} sx={{ mt: 1 }}>

                        <TextField

                            margin="normal"
                            required={true}
                            fullWidth
                            id="reset-password-input"
                            label="new password"
                            name="password"
                            type='password'
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required={true}
                            fullWidth
                            name="cpassword"
                            label="repeat password"
                            type="password"
                            id="reset-password-input-confirm"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Accept
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );

}
