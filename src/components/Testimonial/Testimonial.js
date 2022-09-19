import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import quote from '../../assets/icons/quote.svg';

import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';

import TestimonialItem from './TestimonialItem';
const testimonialData = [
    {
      _id: 1,
      name: 'Winson Herry',
      address: 'California',
      description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people1
    },
    {
      _id: 2,
      name: 'Winson Herry',
      address: 'California',
      description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people2
    },
    {
      _id: 3,
      name: 'Winson Herry',
      address: 'California',
      description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people3
    },
  ]
const Testimonial = () => {
    return (
        <Box  margin='90px 0'>
            <Container>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box>
                    <Typography variant='h6' sx={{color: '#19D3AE', fontSize: '18px', lineHeight: '27px', fontWeight: 700}}>
                        Testimonial
                    </Typography>
                    <Typography variant='h4' sx={{fontSize: '34px', lineHeight: '49px', fontWeight: 500,}}>
                    What Our Patients Says
                    </Typography>
                </Box>
                <img src={quote} width='100px' alt="quote" />
            </Box>
           
            <Box margin='50px 0'>
                <Grid container spacing={3}>
                {testimonialData.map(item => 
                    <TestimonialItem key= {item._id} item = {item}/>
                )}
                </Grid>
            </Box>
            </Container>
        </Box>
    );
};

export default Testimonial;