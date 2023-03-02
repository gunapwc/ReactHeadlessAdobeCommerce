import React from 'react';
import OwlCarousel from 'react-owl-carousel';



export default function Exclusiveproduct() {

    const options = {
        loop: true,
        center: false,
        items: 1,
        margin: 10,
        autoplay: false,
        dots: false,
        // autoplayTimeout: 8500,
        smartSpeed: 450,
        // arrow:true,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    };
    return (
        <section>
        <div className='widget block' >

            <div className='cdz-brand-slider-wrap popular-categories-wrapper'>
                <div className='section-container'>

                    <div className='cdz-block-title'>
                        <p>Exciting Deals On Exclusive Categories</p>
                    </div>

                    <div className='cdz-brand-top-categories'>


                        <OwlCarousel id="carousel-product" className="owl-carousel owl-theme" {...options}>


                            <div class="item">

                                <img src={require('../Assets/images/product-img/BabyRemedies.jpg')} alt="BabyRemedies.jpg" />

                            </div>
                            <div class="item">
                                <img src={require('../Assets/images/product-img/BabyRemedies.jpg')} alt="BabyRemedies.jpg" />


                            </div>
                            <div class="item">
                                <img src={require('../Assets/images/product-img/Popular_Categories-Beauty_1.jpg')} alt="BabyRemedies.jpg" />


                            </div>
                            <div class="item">
                                <img src={require('../Assets/images/product-img/Mother_Baby.jpg')} alt="BabyRemedies.jpg" />


                            </div>
                            <div class="item">
                                <img src={require('../Assets/images/product-img/Mother_Baby.jpg')} alt="BabyRemedies.jpg" />


                            </div>
                            <div class="item">
                                <img src={require('../Assets/images/product-img/Mother_Baby.jpg')} alt="BabyRemedies.jpg" />


                            </div>


                        </OwlCarousel>
                    </div>

                </div>
            </div>
        </div>
         <div className='widget block' >

         <div className='cdz-brand-slider-wrap popular-categories-wrapper'>
             <div className='section-container'>

                 <div className='cdz-block-title'></div>

                 <div className='cdz-brand-top-categories p-t5'>


                     <OwlCarousel id="carousel-product" className="owl-carousel owl-theme" {...options}>


                         <div class="item">

                             <img src={require('../Assets/images/product-img/Popular_Categories-Beauty_1.jpg')} alt="Popular_Categories-Beauty_1" />

                         </div>
                         <div class="item">
                             <img src={require('../Assets/images/product-img/Sports_Nutrition.jpg')} alt="Sports_Nutrition" />


                         </div>
                         <div class="item">
                             <img src={require('../Assets/images/product-img/Hair_Concern.jpg')} alt="Hair_Concern" />


                         </div>
                         <div class="item">
                             <img src={require('../Assets/images/product-img/Mother_Baby.jpg')} alt="BabyRemedies" />


                         </div>
                         <div class="item">
                             <img src={require('../Assets/images/product-img/Mother_Baby.jpg')} alt="BabyRemedies" />


                         </div>
                         <div class="item">
                             <img src={require('../Assets/images/product-img/Mother_Baby.jpg')} alt="BabyRemedies.jpg" />
                         </div>


                     </OwlCarousel>
                 </div>

             </div>
         </div>
     </div>
     </section>
    )
}