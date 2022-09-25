import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleDoctor from './SingleDoctor';        

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/doctors')
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, [])

    return (
        <Box>
          <Container sx={{textAlign: 'center'}}>
            <Typography sx={{color: '#19D3AE', fontSize: '18px', lineHeight: '27px', fontWeight: 700, marginTop: '90px'}} variant='h6' component='CESdiv'>
              OUR DOCTORS
            </Typography>
            <Grid container spacing={3}>
              {doctors.map(doctor => 
                <SingleDoctor key= {doctor._id} doctor = {doctor}/>
              )}
            </Grid>
          </Container>
      </Box>
    );
};

export default Doctors;