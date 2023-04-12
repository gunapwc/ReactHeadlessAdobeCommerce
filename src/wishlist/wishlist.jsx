import React, { useState, useEffect } from "react";
import CartTileFixed from "../cart tile/cartTileFixed";
import "./wishlist.scss"
import { addToCart, login } from "../redux/counterSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import img1 from "../ProductDetailPage/xretail6_02.jpg.pagespeed.ic.XP0T-m8rXz.webp"

const Wishlist = () => {
    const [array, setArray] = useState([]);
    const Navigate = useNavigate();
    const Dispatch = useDispatch();
    useEffect(() => {

        setArray([{
            product_name: "Anythy Medicine",
            product_description: "Lower Gypsem text any text  Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text",
            product_quantity: 1,
            product_price: 100
        },
        {
            product_name: "Other Medicine ",
            product_description: "Lower Gypsem text any text  Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text",
            product_quantity: 2,
            product_price: 264
        },
        {
            product_name: "Anythy Medicine",
            product_description: "Lower Gypsem text any text  Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text",
            product_quantity: 1,
            product_price: 100
        },
        {
            product_name: "Other Medicine ",
            product_description: "Lower Gypsem text any text  Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text",
            product_quantity: 2,
            product_price: 264
        }]);
    }, []);
    const onAdd = (value) => {
        let item = {
            product_name: value.product_name,
            product_description: value.product_description,
            product_quantity: value.product_quantity,
            product_price: value.product_price
        };
        Dispatch(addToCart(item));
        Navigate("../cart-page")
    }
    return (
        <div className="wishlist">
            <h1>Favourites</h1>
            <div className="wishlist-inner">
                {array.map((value, index) => {
                    return (
                        <div className="wishlist-card">
                            <img src={img1}></img>
                            <h1>{value.product_name}</h1>
                            <p>Rs. {value.product_price}</p>
                            <div className="wishlist-button-align">
                                <button onClick={() => { onAdd(value) }}>Add To Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Wishlist;