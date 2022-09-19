import React from 'react';
import AppointmentBanner from '../components/AppointmentBanner/AppointmentBanner';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Navigation from '../components/shared/Navigation';
import InfoCard from '../components/InfoCard/InfoCard';
import Contact from '../components/Contact/Contact';
import Testimonial from '../components/Testimonial/Testimonial';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Navigation/>
            <Hero/>
            <InfoCard/>
            <Services/>
            <About/>
            <AppointmentBanner/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;