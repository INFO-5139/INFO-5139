import React from "react";
import { CartContainer, Overlay } from "./cart.styles";
import { HeadingTwo } from "../../pages/HomePage/home-page.styles";
import { useDispatch } from "react-redux";
import { updateIsActive } from "../../redux/cart/cart.reducer";

const Cart = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Overlay
        onClick={() => {
          dispatch(updateIsActive(false));
        }}
      />
      <CartContainer>
        <HeadingTwo style={{ textAlign: "center", marginTop: 15 }}>
          Cart
        </HeadingTwo>
      </CartContainer>
    </>
  );
};

export default Cart;
