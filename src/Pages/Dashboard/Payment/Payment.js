import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout';

const Payment = () => {
    const bookingData = useLoaderData()
    console.log(bookingData)
    return (
        <div>
           <div> <h2>Payment for {bookingData.servicesName}</h2>
            <p>Please pay {bookingData.price} for your appointment on {bookingData.appintmentDate} in {bookingData.slot}</p></div>
            <div>
                <Checkout></Checkout>
            </div>
        </div>
    );
};

export default Payment;