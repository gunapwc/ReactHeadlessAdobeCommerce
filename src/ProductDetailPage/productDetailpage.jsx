import React, { useState } from "react";
import "../styles/_common.scss";
import "../styles/_spacing.scss";
import "../styles/Style.scss";
import img1 from "./xretail6_02.jpg.pagespeed.ic.XP0T-m8rXz.webp";

const ProductDetailPage = () => {
    const [array, setarray] = useState([1, 2, 3, 4, 5])

    return (
        <div className="PDP">
            <div className="PDP-info">
                <img src={img1} width="500px">
                </img>
                <div className="PDP-detail">
                    <h1>Anythy Medicine</h1>
                    <p>Lower Gypsem text any text </p>
                    <input placeholder="Quantity"></input>
                    <div className="PDP-button-align">
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="PLP-suggestions">
                {
                    array.map((value) => {
                        return <div className="PLP-card">
                            <img src={img1}></img>
                            <h1>Any Medicine</h1>
                            <p> Lower Gypsem</p>
                            <div className="PLP-button-align">
                                <button>Open</button>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>

    )
}

export default ProductDetailPage;