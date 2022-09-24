import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(()=> {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    },[appointmentId])

    return (
        <Box>
            <Typography variant='h5' sx={{textAlign:'center'}}>Please Pay for: {appointmentId} </Typography>
            <Typography variant='h6' sx={{textAlign:'center'}}>Pay: $ {appointment.price} </Typography>
        </Box>
    );
};

export default Payment;