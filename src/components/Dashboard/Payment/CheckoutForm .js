import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import useAuth from './../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const CheckoutForm  = ({appointment}) => {
    const {price, patientName, _id} = appointment;
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const {user} = useAuth();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_API}/create-payment-intent`, {
           method: 'POST',
           headers: {
            'content-type' : 'application/json',
           },
           body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret)); 
    }, [price])

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);

        if(card === null){
            return;
        }

    setProcessing(true);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        setError(error.message);
        setProcessing(false);
        setSuccess('');
      } else {
        setError('');
        // console.log(paymentMethod);    
      }

      // payment intent
      const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: patientName,
              email: user.email,
            },
          },
        },
      );
      if(intentError){
        setError(intentError.message);
        setSuccess('');
      }
      else{
        setError('');
        setSuccess('Your payment processed successfully.');
        // console.log(paymentIntent);
        setProcessing(false);
        // save to database
        const payment = {
            amount: paymentIntent.amount,
            transaction: paymentIntent.client_secret.split('_secret_')[0],
            created: paymentIntent.created,
            last4: paymentMethod.card.last4,
        }
        const url = `${process.env.REACT_APP_SERVER_API}/appointments/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(payment),
        })
        .then(res => res.json())
        .then(data => console.log(data));
      }

    }

    return (
        <div>
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
                {processing ? <CircularProgress/> :
                 <button type="submit" 
                    style={{
                        background: 'linear-gradient(90deg, #19D3AE, #0FCFEC)',
                        color: '#fff',
                        border: 'none',
                        padding: '6px 10px',
                        borderRadius: '4px',
                        fontSize: '16px',
                        margin: '14px 0 20px 0'
                    }} 
                    disabled={!stripe || success}>
                    Pay ${price}
                </button>}
            </form>
            {
                error && <span style={{color: '#EF5350', backgroundColor: '#FDEDED', padding: '6px 10px', borderRadius: '4px'}}>{error}</span>
            }
            {
                success && <span style={{color: '#4CAF50', backgroundColor: '#EDF7ED', padding: '6px 10px', borderRadius: '2px'}}>{success}</span>
            }
        </div>
    );
};

export default CheckoutForm ;