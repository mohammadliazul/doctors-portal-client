import { Box, Container, Grid, Typography } from '@mui/material';

import React from 'react';
import { bookings } from '../../data/data';
import BookingItem from './BookingItem';

const Booking = ({date}) => {
    return (
        <Box  sx={{marginBottom: '100px'}}>
            <Container>
                <Typography sx={{color: '#19D3AE', textAlign: 'center', fontWeight:600, my: 10}} variant='h4'>
                Available Appointment on  {new Date(date).toDateString()}
                </Typography>

                <Grid container spacing={3}>
                    {
                        bookings.map((booking)=> <BookingItem date={date} booking={booking}/>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Booking;