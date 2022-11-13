import React from 'react';
import SectionName from '../../../componets/SectionName';
import ServicesCards from './ServicesCards/ServicesCards';

const OurServices = () => {
    return (
        <div className='text-center my-32'>
            <div>
            <SectionName>OUR SERVICES</SectionName>
            <h2 className='text-4xl '>Services We Provide</h2>
            </div>
            <div className='mt-16'>
                <ServicesCards></ServicesCards>
            </div>
        </div>
    );
};

export default OurServices;