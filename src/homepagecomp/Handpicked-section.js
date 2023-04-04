import React from "react";


export default function Handpicked () {
    return(
        <section className="widget block">
            <div className="section-container">

            <div className="cdz-brand-slider-wrap essential-deals-wrapper">

                <div className="cdz-block-title">
                    <p className="cdz-title">Handpicked By Our Experts</p>
                </div>

                <div className="cdz-brand-top-categories-landscape">
                    <div className="brand-items">
                        <img src={require('../Assets/images/product-img/Baby_Feeding_essentials1.png')} alt="Baby_Feeding_essentials1" className='' />
                    </div>
                    <div className="brand-items">
                        <img src={require('../Assets/images/product-img/Health_Concern1.png')} alt="Kidles_1" className='' />
                    </div>
                    <div className="brand-items">
                        <img src={require('../Assets/images/product-img/Health_Concern1.png')} alt="Kidles_1" className='' />
                    </div>
                    <div className="brand-items">
                        <img src={require('../Assets/images/product-img/Baby_Feeding_essentials1.png')} alt="Baby_Feeding_essentials1" className='' />
                    </div>

                </div>
            </div>

            </div>

        </section>
    )
}