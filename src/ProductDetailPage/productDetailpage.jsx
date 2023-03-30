import React, { useState, useEffect } from "react";
import "../styles/_common.scss";
import "../styles/_spacing.scss";
import "../styles/Style.scss";
import img1 from "./xretail6_02.jpg.pagespeed.ic.XP0T-m8rXz.webp";
import Quantity from "../qunatity/quantity";
import { useQuery, gql } from '@apollo/client';
import { useNavigate } from "react-router-dom";
import queryPdp from "./querypdp";
import queryRelated from "./queryrelated";
import { addToCart, login } from "../redux/counterSlice";
import { useDispatch } from "react-redux";

const ProductDetailPage = () => {
    const [array, setarray] = useState([1, 2, 3, 4, 5]);
    const param = "110022";
    const Navigate = useNavigate();
    const Dispatch = useDispatch();
    // Dispatch(login(23456789));
    const onAdd = () => {
        let item = {
            product_name: content.name,
            product_description: content.description.html,
            product_quantity: qunatity,
            product_price: 100
          };
        Dispatch(addToCart(item));
        Navigate("../cart-page")
    }
    const [content, setContent] = useState({ name: "", 
                                            description: { html: "",
                                                         __typename: "" },
                                            short_description: { html: "", 
                                                                __typename: "" }, 
                                            __typename: "" }
                                            );
    const [qunatity,setQuantity] = useState(1);
    const [arrayR, setArrayR] = useState([]);
    const { loading:loading, error:error, data:data } = useQuery(queryPdp(param));
    const { loading:loading1, error:error1, data:data1 } = useQuery(queryRelated(param));
    useEffect(() => {
        if (data) {
            setContent(data.products.items[0]);
        }
        console.log(content);
    }, [loading]
    );
    useEffect(() => {
        if (data1) {
            setArrayR(data1.products.items[0]?.related_products);
        }
        console.log(arrayR);
    }, [data1]
    );
    useEffect(() => {
        console.log(content)
    }, [content]);
    useEffect(() => {
        console.log(arrayR)
    }, [arrayR]);
    const updateQuantity = (value) => {
        // let data = content;
        // data.product_quantity = value;
        // setContent(data);
        setQuantity(value);
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
                    <h1>{content.name}</h1>
                    <div dangerouslySetInnerHTML={{__html: content.description.html}}/>
                    {/* <p>{content.description.html}</p> */}
                    <Quantity value={qunatity} updateValue={updateQuantity}></Quantity>
                    <h2>{content.product_price} Rs.</h2>
                    <div className="pdp-button-align">
                        <button onClick={onAdd}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="plp-suggestions">
                {
                    arrayR.map((value) => {
                        return <div className="plp-card">
                            <img src={img1}></img>
                            <h1>{value.name}</h1>
                            <p>{value.special_price}</p>
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