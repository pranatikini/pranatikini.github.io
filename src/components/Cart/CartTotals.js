import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Payment from './Payment';
import { Route } from 'react-router-dom';

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, clearCart } = value;
  const sub = parseInt(cartSubTotal);
  const total = parseInt(cartSubTotal) + parseInt(cartTax);

  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handlePayment = async () => {
    try {
      if (!stripe || !elements) {
        return;
      }

      // Create a payment method using the card element
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: {
          address: {
            line1: address,
          },
        },
      });

      if (error) {
        setPaymentError(error.message);
        return;
      }

      // Use the paymentMethod object to process the payment or perform other actions
      console.log('Payment method:', paymentMethod);

      // Set the order confirmation status
      setOrderConfirmed(true);

    } catch (error) {
      console.log('Error:', error);
    }
  };

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      state: '',
      city: '',
      pincode: '',
    };

    if (email.trim() === '') {
      newErrors.email = 'Email is required';
      valid = false;
    }

    if (firstName.trim() === '') {
      newErrors.firstName = 'First Name is required';
      valid = false;
    }

    if (lastName.trim() === '') {
      newErrors.lastName = 'Last Name is required';
      valid = false;
    }

    if (address.trim() === '') {
      newErrors.address = 'Address is required';
      valid = false;
    }

    if (state.trim() === '') {
      newErrors.state = 'State is required';
      valid = false;
    }

    if (city.trim() === '') {
      newErrors.city = 'City is required';
      valid = false;
    }

    if (pincode.trim() === '') {
      newErrors.pincode = 'Pincode is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Display the entered information in the console
      console.log('Email:', email);
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Address:', address);
      console.log('State:', state);
      console.log('City:', city);
      console.log('Pincode:', pincode);
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => {
                  clearCart();
                }}
              >
                Clear Cart
              </button>
            </Link>
            <h5>
              <span className="text-title"> Subtotal :</span> <strong>₹ {sub} </strong>
            </h5>
            <h5>
              <span className="text-title"> Tax :</span> <strong>₹ {cartTax} </strong>
            </h5>
            <h5>
              <span className="text-title"> Total :</span> <strong>₹ {total} </strong>
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                {errors.address && <div className="invalid-feedback">{errors.address}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
                {errors.state && <div className="invalid-feedback">{errors.state}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                {errors.city && <div className="invalid-feedback">{errors.city}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="pincode" className="form-label">
                  Pincode
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.pincode ? 'is-invalid' : ''}`}
                  id="pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  required
                />
                {errors.pincode && <div className="invalid-feedback">{errors.pincode}</div>}
              </div>
              <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="submit">
                Submit
              </button>
            </form>
            <div className="mt-4">
              <h4>Details:</h4>
              <p>{email}</p>
              <p>{firstName}</p>
              <p>{lastName}</p>
              <p>{address}</p>
              <p>{state}</p>
              <p>{city}</p>
              <p>{pincode}</p>
            </div>
            <div className="mt-4">
              <h4>Payment:</h4>
            </div>
            <br/>
            <br/>
            <div className="card-element">
              <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
            </div>
            {paymentError && <div className="text-danger">{paymentError}</div>}
            {orderConfirmed ? (
              <React.Fragment>
                <div className="alert alert-success mt-3" role="alert">
                  Your order is confirmed!
                </div>
                <Link to="/">
                  <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button">
                    Continue Shopping
                  </button>
                </Link>
              </React.Fragment>
            ) : (
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={handlePayment}
              >
                Make Payment
              </button>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
