import React from "react";
import { GlobalNet } from "../../utils/images";
import "./GlobalNetwork.scss";

const GlobalNetwork = () => {
  return (
    <>
      <h1 className="container">Our Global Network</h1>
      <div className="globalNet">
        <div className="container">
          <div className="globalNet_card">
            <div className="globalNet_card_first">
              <p>Countries</p>
              <h1>7</h1>
            </div>
            <div className="globalNet_card_last">
              <div className="globalNet_card_last_inner">
                <p>Hospitals</p>
                <h2>29</h2>
              </div>
              <div className="globalNet_card_last_inner">
                <p>Clinics</p>
                <h2>121</h2>
              </div>
            </div>
            <div className="globalNet_card_last">
              <div className="globalNet_card_last_inner">
                <p>Pharmacies</p>
                <h2>421</h2>
              </div>
              <div className="globalNet_card_last_inner">
                <p>Optical Stores</p>
                <h2>23</h2>
              </div>
            </div>
            <div className="globalNet_card_last">
              <div className="globalNet_card_last_inner">
                <p>Nutrition Stores</p>
                <h2>2</h2>
              </div>
              <div className="globalNet_card_last_inner">
                <p>Asterians</p>
                <h2>27242</h2>
              </div>
            </div>
          </div>
          <div className="globalNet_img">
            <img src={GlobalNet} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalNetwork;
