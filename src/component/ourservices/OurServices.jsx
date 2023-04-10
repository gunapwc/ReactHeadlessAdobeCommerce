import React from 'react'
import PriTitle from '../innerSection/PriTitle'
import {
 
    OurServices1,
    OurServices2,
    OurServices3,
    OurServices4,
   
  } from "../../utils/images";
  import "./OurServices.scss"

const OurServices = () => {
  return (
    <>
            <div className="services">
          <PriTitle
            title={"OUR SERVICES"}
            subTitle={"Offering Expertise & Accessibility"}
            details={`From pharmacies to healthcare e-commerce, loyalty programmes, home delivery services & more supporting a seamless health journey, making millions of lives better.`}
            detail={true}
          />
          <div className="services_header">
            <div className="services_header_section">
              <div className="services_header_section_img">
                <img src={OurServices1} alt="OurServices1" />
              </div>
              <h6>Home Delivery</h6>
            </div>
            <div className="services_header_section">
              <div className="services_header_section_img">
                <img src={OurServices2} alt="OurServices1" />
              </div>
              <h6>Online Services</h6>
            </div>
            <div className="services_header_section">
              <div className="services_header_section_img">
                <img src={OurServices3} alt="OurServices1" />
              </div>
              <h6>Rewards Programmes</h6>
            </div>
            <div className="services_header_section">
              <div className="services_header_section_img">
                <img src={OurServices4} alt="OurServices1" />
              </div>
              <h6>Teleconsultation</h6>
            </div>
          </div>
        </div>
    </>
  )
}

export default OurServices