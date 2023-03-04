/** @format */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/home-page.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Login from './pages/Login/login-component';
import SignUp from './pages/SignUp/signup-component';
import Cart from './components/cart/cart.component';
import Contact from './pages/Contact/contact-us';
import { useSelector } from 'react-redux';
import { selectIsActive } from './redux/cart/cart.selector';
import AboutUs from './pages/AboutUs/about-us.component';
import Account from './pages/Account/account';
import Checkout from './pages/Checkout/checkout';
function App() {
  const isCartActive = useSelector(selectIsActive);
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
          element={<Account/>}
        />

        <Route
          path='checkout'
          element={<Checkout/>}
        />
      </Routes>
      {isCartActive ? <Cart /> : ''}
      <Footer />
    </div>
  );
}

export default App;
