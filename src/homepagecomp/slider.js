import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import banner1 from "../Assets/images/AO-HB-Web-H_H.jpg";
import banner2 from "../Assets/images/AO-HB-Web-mom_baby.jpg";
import banner3 from "../Assets/images/myAster_new_user_Web_banner.jpg";
import banner4 from "../Assets/images/AO-HB-DIAPER_CARE-V3.jpg";



export default function Slider() {


    const options = {
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: false,
        dots: false,
        // autoplayTimeout: 8500,
        smartSpeed: 450,
        // arrow:true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    };
    return (
        <section>
            <OwlCarousel id="carousel-banner" className="owl-carousel owl-theme" {...options}>
               
            <div className="item">
                <div className="shadow-effect">

                    <img src={require('../Assets/images/AO-HB-Web-H_H.jpg')} alt="AO-HB-Web-H_H" />

                </div>

            </div>
            <div className="item">
                <div className="shadow-effect">

                    <img src={require('../Assets/images/AO-HB-Web-mom_baby.jpg')} alt="AO-HB-Web-H_H" />

                </div>

            </div>
            <div className="item">
                <div className="shadow-effect">

                    <img src={require('../Assets/images/myAster_new_user_Web_banner.jpg')} alt="AO-HB-Web-H_H" />

                </div>

            </div>
            <div className="item">
                <div className="shadow-effect">
                    <img src={require('../Assets/images/AO-HB-DIAPER_CARE-V3.jpg')} alt="AO-HB-Web-H_H" />
                </div>
            </div>
            </OwlCarousel>
        </section>
    )
}



