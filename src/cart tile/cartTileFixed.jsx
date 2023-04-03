import React from "react";
import img from "../CartPage/xretail6_02.jpg.pagespeed.ic.XP0T-m8rXz.webp"
import Quantity from "../qunatity/quantity";

const CartTileFixed = ({ valuecart, updatesquantity }) => {
    return (
        <>
        <div className="cart-card-root">
            <div className="cart-card">
                <div className="cart-card-detail">
                    <div className="card-img-div">
                        <img src={img} ></img>
                    </div>
                    <div>
                        <h3>Product Name</h3>
                        <h2>{valuecart.product_name}</h2>
                    </div>
                    <div>
                        <h3>Price</h3>
                        <h2>{valuecart.product_price}</h2>
                    </div>
                    <div>
                        <h3>Quantity</h3>
                        <h2>{valuecart.product_quantity}</h2>
                    </div>
                </div>
            </div>
        </div>

        {/* mini-cart */}

        <div className="mini-cart-summary-body">
            <div className="mini-cart-summary d-flex justify-content-between align-items-center">
                <p>3 items in cart</p> 
                <h2>RS 364</h2>
            </div>
            <div className="mini-cart-summary d-flex justify-content-between align-items-center">
                <p>Delivery Charges</p> 
                <h2>RS 20</h2>
            </div>
            <div className="mini-cart-summary d-flex justify-content-between align-items-center">
                <p>GST</p> 
                <h2>RS 42</h2>
            </div>
            <div className="mini-cart-total d-flex justify-content-between align-items-center">
                <p>Total</p> 
                <h2>RS 426</h2>
            </div>
        </div>
        
     </>
    )
}

export default CartTileFixed;