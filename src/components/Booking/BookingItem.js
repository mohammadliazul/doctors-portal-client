import { Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import MuiButton from '../styledComponent/MuiButton';
import BookingModal from './BookingModal';

const BookingItem = ({booking, date}) => {
    const { id, name, time, space } = booking;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Grid key={id} item xs={12} sm={6} md={4} lg={4}>
            <Paper sx={{ p: 4, textAlign: 'center',boxShadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} elevation={0}>
                <Typography variant='h5' sx={{color:'#19D3AE', fontWeight: 600}}>{name}</Typography>
                <Typography variant='h6' sx={{my: '5px', fontWeight: 600, color: '#3A4056' }}>{time}</Typography>
                <Typography variant='subtitle1'sx={{mb: 2, fontWeight: 500, color: '#A6ACAF' }}  >{space} SPACES AVAILABLE</Typography>
                <MuiButton onClick={handleOpen}>BOOK APPOINTMENT</MuiButton>
                <BookingModal date={date} booking={booking} handleClose={handleClose} open={open} />
            </Paper>
        </Grid>
    );
};

export default BookingItem;