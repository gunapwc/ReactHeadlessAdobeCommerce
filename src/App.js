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
import {ProductListpage} from "./pages/sampledemo";
import { Checkout } from "./pages/checkout";
import Ordersummary from "./pages/ordersummary";
import ChangePassword from "./homepagecomp/changepassword";

const Homepage = React.lazy(() => import("./homepagecomp/Apphome"));

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path='/track-order' element={<TrackMyOrder/>}/>
          <Route path='/product-list' element={<ProductListpage/>}/>
          <Route path='/check-out' element={<Checkout/>}/>
          <Route path='/order-summary' element={<Ordersummary/>}/>
          <Route path='/change-password' element={<ChangePassword/>}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
