import React from "react";
import { useNavigate } from "react-router-dom";

const OrderTile = ({value}) => {
    const Navigate = useNavigate();
    const openOrderDetails = () =>{
        Navigate(`/order-details/${value.order_id}`)
    }
    return(
        <div className="cart-card-root">
            <div className="cart-card">
                <div className="cart-card-detail">
                    <div>
                        <h3>#Order Id</h3>
                        <h2>{value.order_id}</h2>
                    </div>
                    <div>
                        <h3>Order Total</h3>
                        <h2>{value.order_total}</h2>
                    </div>
                    <div>
                        <h3>Order Quantity</h3>
                        <h2>{value.order_quantity}</h2>
                    </div>
                    <div>
                        <h3>Delivery Date</h3>
                        <h2>{value.delivery_date.toDateString()}</h2>
                    </div>
                    <div>
                    <div className="button-div">
                        <button onClick={openOrderDetails}>Order Details</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderTile;