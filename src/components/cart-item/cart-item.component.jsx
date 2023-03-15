import { Icon } from '@iconify/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CartItemContainer,
  Image,
  ImageContainer,
  CartItemName,
  CartItemPrice,
  TrashButton,
  QuantityButtonsContainer,
  ChangeQuantityButton,
} from './cart-item.styles';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { updateCartItems } from '../../redux/cart/cart.reducer';
import {
  decrementItemQuantity,
  incrementItemQuantity,
} from '../../redux/cart/cart.utils';

const CartItem = ({ item }) => {
  const cartItems = useSelector(selectCartItems);
  const themeColor = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleIncrementAmount = (itemToAdd) => {
    const newCartItems = incrementItemQuantity(itemToAdd, cartItems);
    dispatch(updateCartItems(newCartItems));
  };

  const handleDecrementAmount = (itemToDecrement) => {
    const newCartItems = decrementItemQuantity(itemToDecrement, cartItems);
    dispatch(updateCartItems(newCartItems));
  };

  const removeItemFromCart = (itemToRemove) => {
    const newCartItems = cartItems.filter((i) => i.id !== itemToRemove.id);
    dispatch(updateCartItems(newCartItems));
  };

  return (
    <CartItemContainer>
      <ImageContainer>
        <Image
          src={item.image}
          alt={item.name}
        />
      </ImageContainer>

      <CartItemName>
        <p>{item.name}</p>
      </CartItemName>

      <CartItemPrice>
        <p>${item.price.toFixed(2)}</p>
      </CartItemPrice>

      <QuantityButtonsContainer>
        <ChangeQuantityButton
          colors={themeColor}
          onClick={() => handleDecrementAmount(item)}
        >
          -
        </ChangeQuantityButton>
        <span>{item.quantity}</span>
        <ChangeQuantityButton
          colors={themeColor}
          onClick={() => handleIncrementAmount(item)}
        >
          +
        </ChangeQuantityButton>
      </QuantityButtonsContainer>

      <TrashButton onClick={() => removeItemFromCart(item)}>
        <Icon
          icon='ph:trash-bold'
          width={35}
          height={35}
        />
      </TrashButton>
    </CartItemContainer>
  );
};

export default CartItem;
