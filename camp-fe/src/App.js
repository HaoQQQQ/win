import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./style/App.css";

// import Navbar from "./components/navbar/navbar";
import Navbar from "./components/NavBar";

import CampDetail from "./components/CampDetail";
// import Booking from "./components/Booking";
import PicSlider from "./components/PicSlider";
import Test from "./components/Test";
import Booking from "./components/Booking";
import Test3 from "./components/Test3";
import Test4 from "./components/Test4";

import Test2 from "./components/Test2";
import TentSelect from "./components/TentSelect";
import { CartProvider } from "./components/useCart";
import SingleCart from "./components/SingleCart";

import { SecondCartProvider } from "./components/useSecondCart";

function App() {
  return (
    <>
      <SecondCartProvider>
        <CartProvider>
          <div className="App">
            <BrowserRouter>
              <Navbar />
              <Routes>
                {/* <Route path="/map/:campId" element={<Test />} /> */}
                {/* <Route path="/products" element={<Products />} /> */}
                {/* <Route path="/products/:productId" element={<ProductDetail />} /> */}
                <Route path="/camp/:campId" element={<CampDetail />} />
                {/* <Route path="/camp/:campId" element={<TentSelect />} /> */}
                {/* <Route path="/cart" element={<Test3 />} /> */}
                {/* <Route path="/" element={<Test4 />} /> */}
                {/* <Route path="/" element={<SingleCart />} /> */}
                {/* <Route path="/camp/:campId" element={<Test />} /> */}

                <Route path="/booking/:campId" element={<Booking />} />

                {/* <Route path="/p_orders/cart" element={<ShoppingCart />} /> */}
                {/* <Route path="/p_orders/payment" element={<PaymentForGoods />} /> */}
                <Route
                  path="/p_orders/shipment/credit_card"
                  // element={<ShipmentCreditCard />}
                />
                <Route
                  path="/p_orders/shipment/convenience_store"
                  // element={<ShipmentConvenienceStore />}
                />
                {/* <Route path="/p_orders/success" element={<OrderSuccess />} /> */}
              </Routes>
              {/* <Footer /> */}
              {/* <ProductDetail /> */}
            </BrowserRouter>
          </div>
        </CartProvider>
      </SecondCartProvider>
    </>
  );
}

export default App;
