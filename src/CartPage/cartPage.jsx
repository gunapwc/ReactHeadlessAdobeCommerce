import React, { useState } from "react";
import "../styles/_common.scss";
import "../styles/_spacing.scss";
import "../styles/Style.scss";
import img from "./xretail6_02.jpg.pagespeed.ic.XP0T-m8rXz.webp"
import Quantity from "../qunatity/quantity";


const CartPage = () => {
    const [array, setarray] = useState([1, 2, 3])
    return (
        <div className="cart-root">
            <h1>CART</h1>
            <br />
            <div className="cart">
                <div className="cart-list">
                    <div className="cart-header">
                        <h1>Cart Summery</h1>
                    </div>
                    {array.map(() => {
                        return (
                            <div className="cart-card-root">
                                <img src={img} width="100px"></img>
                                <div className="cart-card">
                                    <div className="cart-card-detail">
                                        <h3>Product Name</h3>
                                        <h3>Price</h3>
                                        <h3>Quantity</h3>
                                    </div>
                                    <div className="cart-card-detail">
                                        <h1>Any Medicine</h1>
                                        <h1>_Price_</h1>
                                        <Quantity></Quantity>
                                    </div>
                                    <div className="cart-card-detail">


                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="cart-detail">
                    <div className="cart-detail">
                        <h1>Order Summery</h1>
                        {array.map((value) => {
                            return (
                                <>
                                    <p>
                                        1-2-3 X Price
                                    </p>
                                </>
                            )
                        })}
                        <br />
                        <p>
                            order_total
                        </p>
                    </div>
                    <div className="button-div">
                        <button>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;