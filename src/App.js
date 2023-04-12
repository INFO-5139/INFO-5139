import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/home-page.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Login from './pages/Login/login-component';
import SignUp from './pages/SignUp/signup-component';
import Cart from './components/cart/cart.component';
import Contact from './pages/Contact/contact-us';
import ProductDetailPage from './pages/ProductDetailPage/product-detail-page';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsActive } from './redux/cart/cart.selector';
import AboutUs from './pages/AboutUs/about-us.component';
import Account from './pages/Account/account';
import Checkout from './pages/Checkout/checkout';
import SalePage from './pages/Sale/sale.component';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { auth, app2 } from './api/firebaseConfig';
import { updateCartItems } from './redux/cart/cart.reducer';

function App() {
  const dispatch = useDispatch();
  const isCartActive = useSelector(selectIsActive);
  const cartContents = useSelector((state) => state.cart.cartItems);
  const database = getFirestore(app2);
  let docSnap;

  useEffect(() => {
    console.log('Cart Contents Length: ', cartContents.length);
    if (auth && auth.currentUser) {
      (async () => {
        const docRef = doc(database, 'Cart', auth.currentUser.email);
        console.log('Doc Ref: ', docRef);
        docSnap = await getDoc(docRef);
        console.log('Doc Snap: ', docSnap);

        if (docSnap.exists()) {
          console.log('Document Found:', docSnap.data());
          setDoc(doc(database, 'Cart', auth.currentUser.email), {
            ...docSnap.data(),
          });
        } else {
          console.log('Document Not Found:');
        }
      })();
    }
  }, [database, auth?.currentUser?.email]);

  useEffect(() => {
    if (docSnap && docSnap.exists()) {
      dispatch(updateCartItems(docSnap.data()));
      console.log('DocSnap has been updated');
    }
  }, [docSnap, dispatch]);

  // useEffect(() => {
  //   if (auth && auth.currentUser) {
  //     (async () => {
  //       const docRef = doc(database, 'Cart', auth.currentUser.email);
  //       const docSnap = await getDoc(docRef);

  //       if (docSnap.exists()) {
  //         const data = docSnap.data();
  //         dispatch(updateCartItems(data));
  //         console.log('Document Found:', data);
  //       } else {
  //         console.log('Document Not Found:');
  //       }
  //     })();
  //     console.log('Cart Contents: ', cartContents);
  //   }
  // }, [database, dispatch, auth?.currentUser?.email]);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='login'
          element={<Login />}
        />
        <Route
          path='signup'
          element={<SignUp />}
        />
        <Route
          path='about'
          element={<AboutUs />}
        />
        <Route
          path='contact'
          element={<Contact />}
        />
        <Route
          path='account'
          element={<Account />}
        />

        <Route
          path='product/:id'
          element={<ProductDetailPage />}
        />
        <Route
          path='checkout'
          element={<Checkout />}
        />
        <Route
          path='sale'
          element={<SalePage />}
        />
      </Routes>
      {isCartActive ? <Cart /> : ''}
      <Footer />
    </div>
  );
}

export default App;
