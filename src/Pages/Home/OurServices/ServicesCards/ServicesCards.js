import React from 'react';
import cavity from '../../../../assets/images/cavity.png'
import fluride from '../../../../assets/images/fluoride.png'
import whitening from '../../../../assets/images/whitening.png'
import ServicesCard from './ServicesCard';

const ServicesCards = () => {

    const servicesCardInfo= [
        {
            id: 1,
            title: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ",
            icon: fluride,
        },
        {
            id: 2,
            title: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ",
            icon: cavity,
        },
        {
            id: 3,
            title: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ",
            icon: whitening,
        },
    ]


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {
                servicesCardInfo.map(cardInfo =><ServicesCard key={cardInfo.id} cardInfo = {cardInfo}></ServicesCard> )
            }
        </div>
    );
};

export default ServicesCards;