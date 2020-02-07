import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_y5hdSo2hZXQ0wAqfmUM4DdF600ocw2U4BY';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('Պատվիրված է');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert('Վճարման խնդիր։ Խնդրում ենք ստուգել ձեր քարտի տվյալները։');
      });
  };

  return (
    <StripeCheckout
      label='Պատվիրել'
      name='Automotive'
      currency=''
      // shippingAddress
      // billingAddress={false}
      description={`Ընհանուր ${price} դրամ`}
      amount={priceForStripe}
      allowRememberMe={false}
      panelLabel='Պատվիրել'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
