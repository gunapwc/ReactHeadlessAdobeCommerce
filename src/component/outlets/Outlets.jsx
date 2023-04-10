import React from "react";
import { Outlet1, Outlet2, Outlet3 } from "../../utils/images";
// import { Button } from "../button/button";
import { Button } from "../button/button";
import PriTitle from "../innerSection/PriTitle";
import SimpleSlider from "../slider/SliderComponent";
import "./Outlets.scss";

const Outlets = () => {
  return (
    <>
      <div className="outlets">
        <div className="container">
          <PriTitle
            title={"OUR RETAIL OUTLETS"}
            subTitle={"Professional Service & Care In A Pleasant Ambience"}
            details={`With a growing network of over 200 pharmacies, we are committed to bring reliable & quality healthcare closer to our consumers with an Green Delta Assist in every neighbourhood & the services of a knowledgeable Green Delta Assist available 24/7 for every household. outtlets `}
          />
        </div>
        <SimpleSlider center={"200px"} lgslidesToShow={1}>
          <div className="outlets_img">
            <div className="outlets_img_inner">
              <img src={Outlet1} alt="" />
            </div>
          </div>
          <div className="outlets_img">
            <div className="outlets_img_inner">
              <img src={Outlet2} alt="" />
            </div>
          </div>
          <div className="outlets_img">
            <div className="outlets_img_inner">
              <img src={Outlet3} alt="" />
            </div>
          </div>
          <div className="outlets_img">
            <div className="outlets_img_inner">
              <img src={Outlet2} alt="" />
            </div>
          </div>
          <div className="outlets_img">
            <div className="outlets_img_inner">
              <img src={Outlet1} alt="" />
            </div>
          </div>
          <div className="outlets_img">
            <div className="outlets_img_inner">
              <img src={Outlet3} alt="" />
            </div>
          </div>
          <div className="outlets_img">
            <div className="outlets_img_inner">
              <img src={Outlet1} alt="" />
            </div>
          </div>
        </SimpleSlider>
        <div className="button_section">
          <Button text={" STORE LOCATOR"} />
        </div>
      </div>
    </>
  );
};

export default Outlets;
