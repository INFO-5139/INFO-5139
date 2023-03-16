/** @format */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  CategoriesContainer,
  ProductItemContainer,
  ProductItemTitle,
  ProductPrice,
  ItemButton,
  ProductImageContainer,
  SalePricesContainer,
  ProductQuantity,
 ProductLink,
} from './product-item.styles';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { updateCartItems } from '../../redux/cart/cart.reducer';
import { incrementItemQuantity } from '../../redux/cart/cart.utils';


const ProductItem = ({ item }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  console.log('item from inside product-item: ', item);

  const handleAddItemToCart = (e) => {
    e.preventDefault();
    const existingCartItem = cartItems.find((i) => i.id === item.id);
    if (existingCartItem) {
      const newCartItems = incrementItemQuantity(
        existingCartItem,
        cartItems
      );
      dispatch(updateCartItems(newCartItems));
    } else {
      dispatch(
        updateCartItems([...cartItems, { ...item, quantity: 1 }])
      );
    }
  };

  return (
    <ProductItemContainer >
      <ProductLink to={'/product/' + item.id}>
        <ProductImageContainer>
          <img
            src={item.image}
            alt='Cactus'
          />
        </ProductImageContainer>
        <ProductItemTitle>{item.name}</ProductItemTitle>
        <CategoriesContainer>
          {item.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </CategoriesContainer>
        {item.isOnSale ? (
          <SalePricesContainer>
            <p className='old-price'>${item.oldPrice.toFixed(2)}</p>
            <ProductPrice>${item.price.toFixed(2)}</ProductPrice>
          </SalePricesContainer>
        ) : (
          <ProductPrice>${item.price.toFixed(2)}</ProductPrice>
        )}
        <ProductQuantity>{item.quantity} in stock</ProductQuantity>
      </ProductLink>
      <ItemButton onClick={handleAddItemToCart}>
        Add to cart
      </ItemButton>

    
      
    </ProductItemContainer>
  );
};

export default ProductItem;
