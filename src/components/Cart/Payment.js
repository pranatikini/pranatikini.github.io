import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function Payment() {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);

  const handlePayment = async () => {
    try {
      if (!stripe || !elements) {
        return;
      }

      // Create a payment method using the card element
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (error) {
        setPaymentError(error.message);
        return;
      }

      // Use the paymentMethod object to process the payment or perform other actions
      console.log('Payment method:', paymentMethod);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <h1>Payment Page</h1>
            <div className="card-element">
              <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
            </div>
            {paymentError && <div className="text-danger">{paymentError}</div>}
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={handlePayment}
            >
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
