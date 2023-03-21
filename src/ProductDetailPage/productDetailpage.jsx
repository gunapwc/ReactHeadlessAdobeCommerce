import React, { useState, useEffect } from "react";
import "../styles/_common.scss";
import "../styles/_spacing.scss";
import "../styles/Style.scss";
import img1 from "./xretail6_02.jpg.pagespeed.ic.XP0T-m8rXz.webp";
import Quantity from "../qunatity/quantity";
import { useQuery, gql } from '@apollo/client';
import { useNavigate } from "react-router-dom";
import queryPdp from "./querypdp";

const ProductDetailPage = () => {
    const [array, setarray] = useState([1, 2, 3, 4]);
    const Navigate = useNavigate();
    const onAdd = () => {
        Navigate("../cart-page")
    }
    const [content, setContent] = useState({product_name:"Anythy Medicine we need some laarger text",
                                            product_description:"Lower Gypsem text any text  Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text",
                                            product_quantity:1,
                                            product_price:100
                                        });
    // const { loading, error, data } = useQuery(queryPdp(0));
    // useEffect(() => {
    //     if (data) {
    //         setContent(data.products.items);
    //     }
    //     console.log(content);
    // }, [data]
    // );
    useEffect(()=>{
        console.log(content)
    },[content]);
    const updateQuantity = (value) => {
            let data = content;
            data.product_quantity = value;
            setContent(data);
    }
    return (
        <div className="pdp">
            <div className="pdp-info">
                {/* <div className="pdp-img-selection">
                    {array.map((value)=>{
                        return(
                            <img src={img1} width="100px"></img>
                        )
                    })}
                </div> */}
                <img src={img1} width="600px">
                </img>
                <div className="pdp-detail">
                    <h1>{content.product_name}</h1>
                    <p>{content.product_description}</p>
                    <Quantity value={content.product_quantity} updateValue={updateQuantity}></Quantity>
                    <h2>{content.product_price} Rs.</h2>
                    <div className="pdp-button-align">
                        <button onClick={onAdd}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="plp-suggestions">
                {
                    array.map((value) => {
                        return <div className="plp-card">
                            <img src={img1}></img>
                            <h1>Any Medicine</h1>
                            <p> _Price_</p>
                            <div className="plp-button-align">
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