import { Alert, Box, Container, Grid, Typography } from '@mui/material';

import React, { useState }  from 'react';
import { bookings } from '../../data/data';
import BookingItem from './BookingItem';

const Booking = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Box  sx={{marginBottom: '100px'}}>
            <Container>
                <Typography sx={{color: '#19D3AE', textAlign: 'center', fontWeight:600, my: 8}} variant='h4'>
                Available Appointment on  {new Date(date).toDateString()}
                </Typography>
                {bookingSuccess && <Alert sx={{mb:2}} severity="success">Appointment Booked Successfully!</Alert>}
                <Grid container spacing={3}>
                    {
                        bookings.map((booking)=> 
                        <BookingItem 
                            key={booking.id} 
                            date={date} 
                            booking={booking}
                            setBookingSuccess={setBookingSuccess}
                        />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Booking;