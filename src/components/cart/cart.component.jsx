import React, { useEffect } from 'react';
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
import { auth, app2 } from '../../api/firebaseConfig';
import { doc, deleteDoc, getDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const themeColor = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const database = getFirestore(app2);

  useEffect(() => {
    if (auth && auth.currentUser) {
      (async () => {
        const docRef = doc(database, 'Cart', auth.currentUser.email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const dataArray = Object.keys(data).map((key) => {
            return { ...data[key] };
          });
          dispatch(updateCartItems(dataArray));
        } else {
          console.log('Document Not Found:');
        }
      })();
    }
    // eslint-disable-next-line
  }, [database, dispatch, auth?.currentUser?.email]);

  const clearCartInDB = async () => {
    await deleteDoc(doc(database, 'Cart', auth.currentUser.email));
  };

  return (
    <>
      <Overlay
        colors={themeColor}
        onClick={() => {
          dispatch(updateIsActive(false));
        }}
      />
      <CartContainer colors={themeColor}>
        <HeadingTwo
          colors={themeColor}
          style={{ textAlign: 'center' }}
        >
          Cart
        </HeadingTwo>
        <CartItemHeadings colors={themeColor}>
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
              {cartItems.length > 0
                ? cartItems
                    .reduce((acc, i) => (acc += i.price * i.quantity), 0)
                    .toFixed(2)
                : null}
            </span>
          </TotalText>

          <div>
            <ClearCartButton
              title='Clear the cart, to empty it permanently'
              colors={themeColor}
              onClick={(e) => {
                e.preventDefault();
                dispatch(updateCartItems([]));
                clearCartInDB();
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
