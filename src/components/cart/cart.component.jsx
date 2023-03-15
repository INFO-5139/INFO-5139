import React from 'react';
import {
  CartBottomContainer,
  CartButton,
  CartContainer,
  CartItemHeadings,
  ClearCartButton,
  Overlay,
  TotalText,
} from './cart.styles';
import { HeadingTwo } from '../../pages/HomePage/home-page.styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartItems, updateIsActive } from '../../redux/cart/cart.reducer';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const themeColor = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Overlay
        colors={themeColor}
        onClick={() => {
          dispatch(updateIsActive(false));
        }}
      />
      <CartContainer colors={themeColor}>
        <HeadingTwo style={{ textAlign: 'center' }}>Cart</HeadingTwo>
        <CartItemHeadings>
          <span>Image</span>
          <span>Name</span>
          <span>Price</span>
          <span>Quantity</span>
        </CartItemHeadings>
        <hr />

        <div>
          {cartItems.length > 0
            ? cartItems.map((item) => (
                <CartItem
                  item={item}
                  key={item.id}
                />
              ))
            : 'Cart is empty'}
        </div>

        <CartBottomContainer>
          <TotalText colors={themeColor}>
            Total:
            <span>
              $
              {cartItems
                .reduce((acc, i) => (acc += i.price * i.quantity), 0)
                .toFixed(2)}
            </span>
          </TotalText>

          <div>
            <ClearCartButton
              colors={themeColor}
              onClick={(e) => {
                e.preventDefault();
                dispatch(updateCartItems([]));
              }}
            >
              Clear Cart
            </ClearCartButton>

            <CartButton
              colors={themeColor}
              onClick={(e) => {
                e.preventDefault();
                navigate('/Checkout');
              }}
            >
              Next Step
            </CartButton>
          </div>
        </CartBottomContainer>
      </CartContainer>
    </>
  );
};

export default Cart;
