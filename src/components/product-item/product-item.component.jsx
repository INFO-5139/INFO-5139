import React, { useEffect, useState } from 'react';
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
import ItemRating from '../itemRating/ItemRating';
import { auth, app2 } from '../../api/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const ProductItem = ({ item }) => {
  const [cartContentsChanged, setCartContentsChanged] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const themeColor = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const database = getFirestore(app2);
  const cartContents = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    if (auth && cartContentsChanged) {
      setDoc(doc(database, 'Cart', auth.currentUser.email), {
        ...cartContents,
      });
      setCartContentsChanged(false);
    }
    // eslint-disable-next-line
  }, [cartContentsChanged]);

  const handleAddItemToCart = (e) => {
    e.preventDefault();
    const existingCartItem = cartItems.find((i) => i.id === item.id);
    if (existingCartItem) {
      const newCartItems = incrementItemQuantity(existingCartItem, cartItems);
      dispatch(updateCartItems(newCartItems));
    } else {
      dispatch(updateCartItems([...cartItems, { ...item, quantity: 1 }]));
    }
    if (auth) {
      setCartContentsChanged(true);
    }
  };

  return (
    <ProductItemContainer colors={themeColor}>
      <ProductLink to={'/product/' + item.id}>
        <ProductImageContainer>
          <img
            src={item.image}
            alt='Cactus'
          />
        </ProductImageContainer>
        <ProductItemTitle colors={themeColor}>{item.name}</ProductItemTitle>
        <CategoriesContainer colors={themeColor}>
          {item.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </CategoriesContainer>
        {item.isOnSale ? (
          <SalePricesContainer colors={themeColor}>
            <p className='old-price'>${item.price.toFixed(2)}</p>
            <ProductPrice colors={themeColor}>
              ${item.salesPrice.toFixed(2)}
            </ProductPrice>
          </SalePricesContainer>
        ) : (
          <ProductPrice colors={themeColor}>
            ${item.price.toFixed(2)}
          </ProductPrice>
        )}
        <ProductQuantity colors={themeColor}>
          {item.quantity} in stock
        </ProductQuantity>
        <ItemRating generalRating={item.generalRating}></ItemRating>
      </ProductLink>
      <ItemButton
        colors={themeColor}
        onClick={(e) => {
          handleAddItemToCart(e);
        }}
      >
        Add to cart
      </ItemButton>
    </ProductItemContainer>
  );
};

export default ProductItem;
