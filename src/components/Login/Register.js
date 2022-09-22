import { Alert, Box, CardMedia, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login.png';
import MuiButton from '../styledComponent/MuiButton';
import { styled } from '@mui/material/styles';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const {registerUser, isLoading, user, authError} = useAuth();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    const handleRegisterSubmit = e => {
        e.preventDefault();
        if(registerData.password !== registerData.password2){
            alert('Your password did not match');
        }
        registerUser(registerData.email, registerData.password, registerData.name, navigate);
    }

    // breakpoints wise marginTop 
    const CustomStyle = styled('div')(({ theme }) => ({
        [theme.breakpoints.up('md')]: {
            marginTop: 100
        },
        }));

    return (

            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={6} lg={5} sx={{display: 'flex', alignItems: 'center'}}>
                        <Box>
                            <Typography style={{textAlign: 'center', margin: '5px 0', fontWeight:600, color: '#19D3AE'}} variant='h6'>Register</Typography>
                            { !isLoading && <form onSubmit={handleRegisterSubmit}>
                                <TextField 
                                    margin='dense'
                                    fullWidth
                                    // required 
                                    id="standard-basic" 
                                    label="Name" 
                                    name="name"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />
                                <TextField 
                                    margin='dense'
                                    fullWidth
                                    // required 
                                    inputProps={{ style: { textTransform: "lowercase" }}}
                                    type="email" 
                                    id="standard-basic" 
                                    label="Email" 
                                    name="email"
                                    onBlur={handleOnBlur}
                                    variant="standard" 
                                />
                                <TextField
                                    margin='dense'
                                    fullWidth
                                    // required
                                    id="standard-password-input"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />
                                <TextField
                                    margin='dense'
                                    fullWidth
                                    // required
                                    id="standard-password-input"
                                    label="Re-password"
                                    type="password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />
                                        
                                <MuiButton fullWidth type='submit' sx={{mt:3, mb:1}}>REGISTER</MuiButton>
                
                                <NavLink style={{textDecoration: 'none', color:'inherit', }} to='/login'>
                                    <Typography variant="subtitle1" sx={{mb:1}}>Already Registered? Please Login</Typography>
                                </NavLink>
                            </form>}
                            {isLoading && <span style={{display: 'flex', justifyContent: 'center', marginBottom: '10px'}}><CircularProgress/></span>} 
                            {user?.email && <Alert severity="success">You are successfully registered!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert> }

                        </Box> 
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={7} >
                            <CustomStyle>
                                <CardMedia
                                component="img"
                                width= '100%'
                                image={loginImg}
                                alt="login img"
                                />
                            </CustomStyle>
                            
                        </Grid>
                </Grid>
            </Container>

    );
};

export default Register;