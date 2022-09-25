import React from 'react';
import Box from '@mui/system/Box';
import { Container, Grid, Typography } from '@mui/material';
import doctor from '../../assets/images/doctor.png';
// import doctor from '../../assets/images/doctor-small.png';
import bgImg from '../../assets/images/appointment.png';
import MuiButton from '../styledComponent/MuiButton';

const appointmentBG = {
    background: `url(${bgImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '533px',
    marginTop: 120,
    display: 'flex',
    alignItems: 'center'
}


const AppointmentBanner = () => {
    
    return (
    
        <Box style={appointmentBG}>
            <Grid container spacing={2}>
                <Grid item sx={{ display: { xs: 'none', sm: 'none', md:'block', lg: 'block' }}} xs={12} sm={12} md={5} lg={5}>
                    <img className='doctor' src={doctor} alt="doctor" height='485px' width='90%' />
                </Grid>
                   
                <Grid item  xs={12} sm={12} md={7} lg={7} sx={{color: '#fff', display: 'flex', alignItems: 'center'}}>
                    <Container>
                        <Typography variant='h6' sx={{color: '#19D3AE', fontSize: '18px', lineHeight: '27px', fontWeight: 700}}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' sx={{fontSize: '34px', lineHeight: '49px', fontWeight: 500,}}>
                        Make an Appointment Today
                        </Typography>
                        <Typography variant='body2' sx={{mt: 3, mb:5, maxWidth: 520, textAlign:'justify', opacity:'90%'}}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.
                        </Typography>
                        <MuiButton>GET STARTED</MuiButton>
                    </Container>
                </Grid>
            </Grid>
      </Box>
    );
};

export default AppointmentBanner;