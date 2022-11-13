import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {

    const infoCardsDetails= [
        {
            id: 1,
            title: "Opening Hours",
            description: "Lorem ipsum dolor sit amet consectetur  ",
            icon: clock,
            bgColor: " bg-gradient-to-r from-primary to-secondary"
        },
        {
            id: 2,
            title: "Visit Our Location",
            description: "Brooklyn, NY 10036, United States ",
            icon: marker,
            bgColor: "bg-accent"
        },
        {
            id: 1,
            title: "Contact Us Now",
            description: "+000 123 456789",
            icon: phone,
            bgColor: "bg-gradient-to-r from-primary to-secondary"
        },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                infoCardsDetails.map(cardInfo => <InfoCard key={cardInfo.id} cardInfo={cardInfo}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;