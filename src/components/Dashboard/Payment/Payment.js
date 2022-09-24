import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm ';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51LWvWaDDEE6lLbIZDTo2iIF4J0GMJFcytTmVtJF7vZ8AKNZEzRfsRjKLZHX7iuYTAyzABxTzaOp2yXD2HLjJHDAf00IIWbej2N'); 

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

            {appointment?.price &&
                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment}/>
                </Elements>
            } 
        </Box>
    );
};

export default Payment;