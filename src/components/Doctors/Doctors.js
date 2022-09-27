import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleDoctor from './SingleDoctor';        

const Doctors = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_SERVER_API}/doctors`)
      .then(res => res.json())
      .then(data => {
        setDoctors(data);
        setIsLoading(false);
      });
  }, [])

    return ( 

        <Box>
          <Container sx={{textAlign: 'center'}}>
            <Typography sx={{color: '#19D3AE', fontSize: '18px', lineHeight: '27px', fontWeight: 700, marginTop: '90px'}} variant='h6' component='CESdiv'>
              OUR DOCTORS
            </Typography>
            {isLoading ?        
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '200px' }}>
                <CircularProgress />
              </Box>
              :
              <Grid container spacing={3}>
                {doctors.map(doctor => 
                  <SingleDoctor key= {doctor._id} doctor = {doctor}/>
                )}
              </Grid>
            }
          </Container>
        </Box>
    );
};

export default Doctors;