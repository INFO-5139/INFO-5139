/** @format */

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/home-page.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Login from './pages/Login/login-component';

function App() {
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
