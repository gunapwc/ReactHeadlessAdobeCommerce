import React from "react";
import img from "../CartPage/xretail6_02.jpg.pagespeed.ic.XP0T-m8rXz.webp"
import Quantity from "../qunatity/quantity";

const CartTileFixed = ({ valuecart, updatesquantity }) => {
    return (
        <div className="cart-card-root">
            <div className="card-img-div">
                <img src={img} ></img>
            </div>
            <div className="cart-card">
                <div className="cart-card-detail">
                    <h3>Product Name</h3>
                    <h3>Price</h3>
                    <h3>Quantity</h3>
                </div>
                <div className="cart-card-detail">
                    <h1>{valuecart.product_name}</h1>
                    <h2>{valuecart.product_price}</h2>
                    <h2>{valuecart.product_quantity}</h2>
                </div>
                <div className="cart-card-detail">


                </div>
            </div>
        </div>
    )
}

export default CartTileFixed;