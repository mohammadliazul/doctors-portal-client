import {Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import MuiButton from '../styledComponent/MuiButton';
import { useNavigate } from 'react-router-dom';



const bgImg={
    minHeight: 500, 
    height:'100vh', 
    display:'flex', 
    alignItems: 'center',
    background:  `url(${bg})`,
    zIndex: -1
}

const heroTitle={
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '48px',
    lineHeight: '65px',
    color: '#3A4256',
}


const Hero = () => {

    const navigate = useNavigate();

    return (
        <Box style={bgImg} >
            <Container>
                <Grid container spacing={2} sx={{alignItems: 'center'}}>
                    <Grid item xs={12} sm={5} md={5} lg={5} order={{ xs: 2, sm: 1, md: 1}}>
                        <Box>
                            <Typography variant='h3' style={heroTitle}>
                            Your New Smile Starts Here
                            </Typography>
                            <Typography variant='body1' sx={{mt: 3, mb: 4, color: '#8C8997'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus expedita ipsam fuga illo quibusdam. ellumnal consequuntur veritatis at cupiditate.
                            </Typography>
                            <MuiButton onClick={() => navigate('/appointment')}>
                                Get Appointment
                            </MuiButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={7} md={7} lg={7} order={{ xs: 1, sm: 2, md:2 }}>
                        <img style={{ width: '100%'}} src={chair} alt="chair" />
                    </Grid>
                </Grid>
            </Container>  
        </Box>
    );
};

export default Hero;