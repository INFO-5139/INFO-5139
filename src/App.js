import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/home-page.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Cart from "./components/cart/cart.component";
import { useSelector } from "react-redux";
import { selectIsActive } from "./redux/cart/cart.selector";

function App() {
  const isCartActive = useSelector(selectIsActive);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {isCartActive ? <Cart /> : ""}
      <Footer />
    </div>
  );
}

export default App;
