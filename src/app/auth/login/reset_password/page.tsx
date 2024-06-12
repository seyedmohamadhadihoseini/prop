"use client";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import SendResetPassword from './server';



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function DisplayResetPassword() {

    const [state, formAction] = useFormState(SendResetPassword, { id: 0, success: false, message: "" });
    useEffect(() => {
        if(state.success){
            toast.success(state.message);
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
                        Reset Password
                    </Typography>


                    <Box component="form" action={formAction} sx={{ mt: 1 }}>

                        <TextField
                            margin="normal"
                            required
                            type='email'
                            fullWidth
                            id="email-forget"
                            label="Email"
                            name="email"
                            //   autoComplete="email"
                            autoFocus
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Ok
                        </Button>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}