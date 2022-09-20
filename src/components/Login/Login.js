import { Alert, Box, CardMedia, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login.png';
import useAuth from '../../hooks/useAuth';
import MuiButton from '../styledComponent/MuiButton';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const {loginUser, isLoading, user, authError} = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        // alert('Hello');
        loginUser(loginData.email, loginData.password, location, navigate);
    }

    return (

            <Container>
            <Grid container spacing={4} >
                <Grid item xs={12} sm={6} md={6} lg={5} sx={{display: 'flex', alignItems: 'center'}}>
                    <Box>
                        <Typography style={{textAlign: 'center', margin: '5px 0',fontWeight:600, color: '#19D3AE'}} variant='h6'>Login</Typography>
                        { !isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField 
                                margin='dense'
                                fullWidth 
                                // required
                                type="email" 
                                id="standard-basic" 
                                label="Email" 
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                margin='dense'
                                fullWidth
                                // required
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard"
                            />
                            <Typography variant='subtitle1' sx={{color: '#e45b32', mt:1, cursor: 'pointer'}}>Forgot your password?</Typography>

                            <MuiButton fullWidth type='submit' sx={{mt:3, mb:1}}>Login</MuiButton>

                            <NavLink style={{textDecoration: 'none',color:'inherit'}} to='/register'>
                            <Typography variant="subtitle1" sx={{mb:1}}>New User? Please Register</Typography>
                            </NavLink>
                        </form>}
                        {isLoading &&  <CircularProgress/>}
                        {user?.email && <Alert severity="success">You have successfully login!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert> }
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={7}>
                    <CardMedia 
                    component="img"
                    sx={{mt:{lg: '100px'}}}
                    width= '100%'
                    image={loginImg}
                    alt="login img"
                    />
                </Grid>
            </Grid>
            </Container>

    );
};

export default Login;