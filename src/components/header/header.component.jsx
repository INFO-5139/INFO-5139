import React from "react";
import { useSelector } from "react-redux";
import { selectAmount } from "../../redux/cart/cart.selector";

const Header = () => {
  const amount = useSelector(selectAmount);
  return <header>HEADER {amount}</header>;
};

export default Header;
