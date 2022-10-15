import React from "react";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./pages/menu/Menu";
import Review from "./pages/order/Review";
import Home from "./pages/Home";
import Kitchen from "./pages/kitchen/Kitchen";
import Counter from "./pages/counter/Counter";
import GenerateQR from "./pages/generateQR/GenerateQR";
import PaymentOptions from "./pages/order/PaymentOptions";
import Paypal from "./pages/order/Paypal";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:id" element={<Menu />} />
        <Route path="/review" element={<Review />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/generateQR" element={<GenerateQR />} />
        <Route path="/payment-options" element={<PaymentOptions />} />
        <Route path="/paypal" element={<Paypal />} />
      </Routes>
    </Fragment>
  );
}

export default App;
