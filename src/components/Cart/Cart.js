import React, { Component } from 'react';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        const stripePromise = loadStripe('pk_test_51NEW69SD0OykSj9Lr1cKXs8ZyLgUotgqhWmTGSSPFBg0YPGB5jfWlbPrjb1GYkPMxnLbDfQ9VhCa5UwrSf6jJYze00OsjguaJI');
        return (
            <section>
                <ProductConsumer>
                    {(value) => {
                        const {cart} = value;
                        if(cart.length>0) {
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <Elements stripe={stripePromise}>
                                    <CartTotals value={value} />
                                    </Elements>
                                </React.Fragment>
                            );
                        } else {
                            return (
                                <EmptyCart />
                            );
                        }
                    }}
                </ProductConsumer>

            </section>
        );
    }
}
