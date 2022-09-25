import React from 'react';
import Box from '@mui/material/Box'; 
import { Container, Grid, Typography } from '@mui/material';
import SingleService from './SingleService';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const servicesData = [
  {
    _id: 1,
    title: 'Fluoride Treatment',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit hic adipisci neque aut voluptas rerum aperiam alias ut.',
    img: fluoride
  },
  {
    _id: 2,
    title: 'Cavity Filling',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit hic adipisci neque aut voluptas rerum aperiam alias ut.',
    img: cavity
  },
  {
    _id: 3,
    title: 'Teeth Witening',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit hic adipisci neque aut voluptas rerum aperiam alias ut.',
    img: whitening
  },
]



const Services = () => {
    return (
        <Box>
          <Container sx={{textAlign: 'center'}}>
            <Typography sx={{color: '#19D3AE', fontSize: '18px', lineHeight: '27px', fontWeight: 700, marginTop: '90px'}} variant='h6' component='div'>
              OUR SERVICES
            </Typography>
            <Typography sx={{fontSize: '34px', lineHeight: '49px', fontWeight: 500,marginBottom: '60px', color: '#3A4256'}} variant='h4' component='div'>
              Services We Provide
            </Typography>
            <Grid container spacing={3}>
              {servicesData.map(service => 
                <SingleService key= {service._id} service = {service}/>
              )}
            </Grid>
          </Container>
      </Box>
    );
};

export default Services;