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

const Homepage = React.lazy(() => import("./homepagecomp/Apphome"));

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>

          <Route exact path="/" element={<Homepage />} />
          <Route path='/track-order' element={<TrackMyOrder/>}/>
          <Route path='/product-detail-page' element = {<ProductDetailPage/>} />
          <Route path="/cart-page" element = { <CartPage/>}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
