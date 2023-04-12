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
                        <h2>{value.id}</h2>
                    </div>
                    <div>
                        <h3>Order Total</h3>
                        <h2>{value.grand_total}</h2>
                    </div>
                    <div>
                        <h3>Order Status</h3>
                        <h2>{value.status}</h2>
                    </div>
                    <div>
                        <h3>Delivery Date</h3>
                        <h2>{value.created_at}</h2>
                    </div>
                    <div>
                    <div className="button-div2">
                        <button onClick={openOrderDetails}>Order Details</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderTile;