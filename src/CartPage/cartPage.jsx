import React, { useState } from "react";
import "../styles/_common.scss";
import "../styles/_spacing.scss";
import "../styles/Style.scss";


const CartPage = () => {
    const [array, setarray] = useState([1, 2, 3])
    return (
        <div className="cart-root">
            <div className="cart-header">
                <h1>order Details</h1> </div>
            <br />
            <div className="cart">
                <div className="cart-list">
                    {array.map(() => {
                        return (
                            <div className="cart-card">
                                <div>
                                    <img width="100px"></img>
                                    <div className="cart-card-detail">
                                        <h3>Any Medicine</h3>
                                        <div width="40%" />
                                        <p>Price</p>
                                    </div>
                                </div>
                                <div className="cart-card-detail">
                                    <h3>Quantity</h3>
                                    <div width={40} />
                                    <p>1-2-3</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="cart-detail">
                    <h1>order summery</h1>
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
            </div>
            <div className="button-div">
                <button>Order</button>
            </div>
        </div>
    )
}

export default CartPage;