import React from "react";
import {
  CartBottomContainer,
  CartButton,
  CartContainer,
  CartItemHeadings,
  Overlay,
  TotalText,
} from "./cart.styles";
import { HeadingTwo } from "../../pages/HomePage/home-page.styles";
import { useDispatch, useSelector } from "react-redux";
import { updateIsActive } from "../../redux/cart/cart.reducer";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <>
      <Overlay
        onClick={() => {
          dispatch(updateIsActive(false));
        }}
      />
      <CartContainer>
        <HeadingTwo style={{ textAlign: "center" }}>Cart</HeadingTwo>
        <CartItemHeadings>
          <span>Image</span>
          <span>Name</span>
          <span>Price</span>
          <span>Quantity</span>
        </CartItemHeadings>
        <hr />

        <div>
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>

        <CartBottomContainer>
          <TotalText>
            Total:
            <span>
              $
              {cartItems
                .reduce((acc, i) => (acc += i.price * i.quantity), 0)
                .toFixed(2)}
            </span>
          </TotalText>

          <CartButton>Next Step</CartButton>
        </CartBottomContainer>
      </CartContainer>
    </>
  );
};

export default Cart;
