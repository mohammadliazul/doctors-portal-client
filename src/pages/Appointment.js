import React, { useState } from 'react';
import AppointmentHero from '../components/AppointmentHero/AppointmentHero';
import Booking from '../components/Booking/Booking';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/shared/Navigation';

const Appointment = () => {
 
    const [date, setDate] = useState(new Date());

    return (
        <>
            <Navigation/>
            <AppointmentHero date={date} setDate={setDate}/>
            <Booking date={date}/>
            <Footer/>
        </>
    );
};

export default Appointment;