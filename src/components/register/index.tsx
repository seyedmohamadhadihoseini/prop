"use client";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MuiTelInput } from 'mui-tel-input'
import { useEffect, useState } from 'react';
import { MuiFileInput } from 'mui-file-input'
import { Input, InputLabel } from '@mui/material';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

function Copyright(props: any) {
    return (
        <Typography color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp({ actionHandler }: { actionHandler: any }) {

    const [phoneCountry, setPhoneCountry] = useState("");
    const [state, formAction] = useFormState(actionHandler, { id: 0, success: true, message: "" });
    const router = useRouter();
    useEffect(() => {
        if (state.message.length > 0) {

            if (!state.success) {
                toast.warn(state.message, {
                    position: "top-left"
                });
            }
            else {
                // toast.success(state.success, { position: "top-right" });
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
                        Sign up
                    </Typography>
                    <Box component="form" action={formAction} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>*/}
                            

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="address"
                                    label="Address"
                                    type="text"
                                    id="address"
                                    multiline
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel>profile:</InputLabel>
                                <input
                                    name="profile"
                                    type='File'
                                    accept='image/*'
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <MuiTelInput name='telephone' defaultCountry={"US"}
                                    fullWidth

                                    label="phone number"
                                    value={phoneCountry}
                                    onChange={value => {
                                        setPhoneCountry(value);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField

                                    fullWidth
                                    name="referral"
                                    placeholder="referral code"
                                    type="number"
                                    id="parent-referral"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/auth/login">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}