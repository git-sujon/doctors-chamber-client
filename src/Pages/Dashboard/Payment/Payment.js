import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const bookingData = useLoaderData()
    console.log(bookingData)
    return (
        <div>
            <h1>Payment</h1>
        </div>
    );
};

export default Payment;