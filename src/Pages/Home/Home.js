import React from 'react';
import Appointment from './Appointment/Appointment';
import Contact from './Contact/Contact';
import ExceptionalCTA from './ExceptionalCTA/ExceptionalCTA';
import HomeBanner from './HomeBanner';
import InfoCards from './InfoCards/InfoCards';
import OurServices from './OurServices/OurServices';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5 mx-auto'>
            <HomeBanner></HomeBanner>
            <InfoCards></InfoCards>
            <OurServices></OurServices>
            <ExceptionalCTA></ExceptionalCTA>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;