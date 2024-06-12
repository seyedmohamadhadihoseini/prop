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
import { useEffect } from 'react';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Auth({authType,actionHandler}:{authType:"login"|"register",actionHandler:any}) {
    
  const [state,formAction] = useFormState(actionHandler,{id:0,success:true,message:""});

  useEffect(()=>{
    if(state.message.length>0){

      if(!state.success){
        toast.warn(state.message,{
          position:"top-left"
        });
      }
      else{
        toast.success(state.message,{
          position:"top-left"
        })
      }
    }
  },[state])
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
            {authType==="login"?"Sign in":"Sign up"}
          </Typography>
          <Box component="form" action={formAction}  sx={{ mt: 1 }}>
          
            <TextField
              onKeyDown={e=>{
              }}
              margin="normal"
              required = {true}
              fullWidth
              id="sign-email"
              name="email"
              type='email'
              placeholder='Email Address *'
              autoComplete="sign-email"
              autoFocus
            />
            <TextField
              margin="normal"
              required = {true}
              fullWidth
              name="password"
              placeholder='Password *'
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {authType}
            </Button>
         
            <Grid container>
                {authType=='login'&&
              <Grid item xs>
                <Link href="/auth/login/reset_password" >
                  Forgot password?
                </Link>
              </Grid>}
              <Grid item>
                <Link href={`/auth/${authType=='login'?"register":"login"}`} >
                
                  {authType=='login'?"Don't have an account? Sign Up":"Are have account ? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}