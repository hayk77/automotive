import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer style={{ marginBottom: '15px' }}>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Ապրանքանիշ</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Նկարագրություն</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Քանակ</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Գին</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Ջնջել</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>ԸՆԴՀԱՆՈՒՐ: ${total}</TotalContainer>
    {/* <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningContainer> */}
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
