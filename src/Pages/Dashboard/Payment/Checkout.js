import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

const stripePromise = loadStripe(process.env.REACT_APP_Stripe_Publishable_key);
console.log(stripePromise)

const Checkout = () => {
    const stripe= useStripe()
    const element = useElements()
    const handleSubmit = async (event) => {
        event.preventDefault()
        

    }

    return (
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
};

export default Checkout;