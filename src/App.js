import React from "react";
import "./styles/Style.scss";
import Header from './Header';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from "./footer";
// import Apphome from "./homepagecomp/Apphome";


const Homepage = React.lazy(() => import('./homepagecomp/Apphome'));


function App() {
  return (
    <Router>

      <div>
        <Header />

        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          </Routes>

        <Footer />

      </div>

    </Router>
  );
}

export default App;
