import {Container, Box, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import Calendar from '../shared/Calendar';

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
    fontSize: '46px',
    lineHeight: '65px',
    color: '#3A4256',
}

const AppointmentHero = ({date, setDate}) => {
    return (
        <Box className='heroCalendar' style={bgImg} >
            <Container>
                <Grid container spacing={2} sx={{alignItems: 'center'}}>
                    <Grid  item xs={12} sm={5} md={5} lg={5} order={{ xs: 2, sm: 1, md: 1}}>
                        <Box>
                            <Typography variant='h3' style={heroTitle}>
                            Appointment
                            </Typography>
                            
                            <Calendar date={date} setDate={setDate}/>
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

export default AppointmentHero;