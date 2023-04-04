import React from "react";
import img from "../CartPage/xretail6_02.jpg.pagespeed.ic.XP0T-m8rXz.webp"
import Quantity from "../qunatity/quantity";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/counterSlice";

const CartTile = ({ valuecart, updatesquantity }) => {
    const Dispatch = useDispatch();
    const deletecart = () => {
        Dispatch(removeFromCart(valuecart));
        window.location.reload();
    }
    return (
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
                        <Quantity value={valuecart.product_quantity} updateValue={(value) => { updatesquantity(value) }}></Quantity>
                    </div>
                    <div>
                        <h3>Sub-Total</h3>
                        <h2>{valuecart.product_price * valuecart.product_quantity}</h2>
                    </div>
                    <div className="icon-button icon-left">
                        <button className="btn-icon-pd"><i class="fa fa-heart"></i></button>
                        <br/>
                        <button className="btn-icon-pd" onClick={deletecart}><i class="fa fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartTile;