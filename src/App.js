import React from "react";
import "./styles/Style.scss";
import Header from "./Header";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "./footer";
// import Apphome from "./homepagecomp/Apphome";
import { TrackMyOrder } from "./pages/trackmyorder";
import ProductDetailPage from "./ProductDetailPage/productDetailpage";
import CartPage from "./CartPage/cartPage";
import { ProductListpage } from "./pages/product_list";
import { Checkout } from "./pages/checkout";
import Ordersummary from "./pages/ordersummary";
import OrderSummeryPage from "./orderSummeryPage/orderSummeryPage";
import MyOrders from "./My Orders/myorders";
import MyAccount from "./My Account/myaccount";
import OrderDetailPage from "./My Orders/orderdetailpage";
import ChangePassword from "./My Account/changepassword";
import Login from "./login/login";
import Register from "./login/register";
import ForgotPassword from "./login/forgotpassword";
import SavedAddress from "./My Account/savedaddress";
import NewAddress from "./My Account/newaddress";
import Profile from "./My Account/profile";
import { About } from "./aubout/About";
import { Suspense, lazy } from "react";

import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

const Homepage = React.lazy(() => import("./homepagecomp/Apphome"));

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading... </div>}>
          <Header />

          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/about-Us" element={<About />} />
            <Route path="/track-order" element={<TrackMyOrder />} />
            <Route
              path="/product-detail-page"
              element={<ProductDetailPage />}
            />
            <Route path="/cart-page" element={<CartPage />} />
            <Route path="/product-list" element={<ProductListpage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-summary" element={<OrderSummeryPage />} />
            <Route path="/order-details">
              <Route path=":orderId" element={<OrderDetailPage />} />
            </Route>
            <Route path="/my-account" element={<MyAccount />}>
              <Route path="orderdetail" element={<MyOrders />} />
              <Route path="changepassword" element={<ChangePassword />} />
              <Route path="savedaddress" element={<SavedAddress />} />

              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="newaddress" element={<NewAddress />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>

          <Footer />
          <NotificationContainer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
