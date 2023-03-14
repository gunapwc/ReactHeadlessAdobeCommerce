import React, { useState } from "react";
import "../styles/_common.scss";
import "../styles/_spacing.scss";
import "../styles/Style.scss";
import img1 from "./xretail6_02.jpg.pagespeed.ic.XP0T-m8rXz.webp";
import Quantity from "../qunatity/quantity";
import { useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
    const [array, setarray] = useState([1, 2, 3, 4]);
    const Navigate = useNavigate();
    const onAdd = () => {
        Navigate("../cart-page")
    }

    return (
        <div className="PDP">
            <div className="PDP-info">
                {/* <div className="PDP-img-selection">
                    {array.map((value)=>{
                        return(
                            <img src={img1} width="100px"></img>
                        )
                    })}
                </div> */}
                <img src={img1} width="600px">
                </img>
                <div className="PDP-detail">
                    <h1>Anythy Medicine we need some laarger text</h1>
                    <p>Lower Gypsem text any text  Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text</p>
                    <Quantity></Quantity>
                    <h2>_Price_</h2>
                    <div className="PDP-button-align">
                        <button onClick={onAdd}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="PLP-suggestions">
                {
                    array.map((value) => {
                        return <div className="PLP-card">
                            <img src={img1}></img>
                            <h1>Any Medicine</h1>
                            <p> _Price_</p>
                            <div className="PLP-button-align">
                                <button onClick={onAdd}>Add To Cart</button>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>

    )
}

export default ProductDetailPage;