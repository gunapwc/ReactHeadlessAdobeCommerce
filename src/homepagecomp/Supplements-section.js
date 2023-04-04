import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


export default function Supplements() {
    return (
        <section className="widget block">
            <div className="section-container">

                <div className="cdz-brand-slider-wrap essential-deals-wrapper">

                    <div className="cdz-block-title">
                        <p className="cdz-title">Brands You'd Love To Explore</p>
                    </div>

                    <div className="cdz-brand-top-categories-landscape">
                        <div className="brand-items">
                            <img src={require('../Assets/images/product-img/Top_Categories_Personal_Care.png')} alt="Top_Categories_Personal_Care" className='' />

                            <div className="tc-outer">
                                <Link to="">

                                    <div className="tc-inner">

                                        <img src={require('../Assets/images/product-img/Diapers_Wipes.png')} alt="Top_Categories_Personal_Care" className='' />
                                        <label>Diapering</label>
                                    </div>
                                </Link>
                                <Link to="">

                                    <div className="tc-inner">

                                        <img src={require('../Assets/images/product-img/Baby_Essential.png')} alt="Top_Categories_Personal_Care" className='' />
                                        <label>Baby Essential</label>
                                    </div>
                                </Link>

                                <Link to="">

                                    <div className="tc-inner">

                                        <img src={require('../Assets/images/product-img/Baby_skin_Hair.png')} alt="Top_Categories_Personal_Care" className='' />
                                        <label>Baby Skin & Hair</label>
                                    </div>
                                </Link>

                            </div>
                        </div>
                        <div className="brand-items">
                            <img src={require('../Assets/images/product-img/Top_Categories_-_Mom_Baby.png')} alt="Top_Categories_-_Mom_Baby" className='' />

                            <div className="tc-outer">
                                <Link to="">
                                    <div className="tc-inner">
                                        <img src={require('../Assets/images/product-img/Diapers_Wipes.png')} alt="Top_Categories_Personal_Care" className='' />
                                        <label>Diapering</label>
                                    </div>
                                </Link>
                                
                                <Link to="">
                                    <div className="tc-inner">
                                        <img src={require('../Assets/images/product-img/Baby_Essential.png')} alt="Top_Categories_Personal_Care" className='' />
                                        <label>Baby Essential</label>
                                    </div>
                                </Link>

                                <Link to="">
                                    <div className="tc-inner">
                                        <img src={require('../Assets/images/product-img/Baby_skin_Hair.png')} alt="Top_Categories_Personal_Care" className='' />
                                        <label>Baby Skin & Hair</label>
                                    </div>
                                </Link>

                            </div>
                        </div>


                    </div>
                </div>

            </div>

        </section>
    )
}