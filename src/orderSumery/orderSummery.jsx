import React from "react";

const OrderSummery = (props) => {
    const orderTotal = () => {
        let order_total=0;
        props.array.map((value)=>{
            order_total += value.product_price*value.product_quantity;
        })
        return order_total
    }
    return (
        <div className="cart-detail">
            <h1 className="order-summery">Order Summery</h1>
            <div className="div-order-summery">
            <p>{props.array.length} items in cart</p> 
            <h2>RS {orderTotal()}</h2>
            </div>
            <div className="div-order-summery">
            <p>Delivery Charges</p> 
            <h2>RS 20</h2>
            </div>
            <div className="div-order-summery">
            <p>GST</p> 
            <h2>RS {orderTotal()*0.05}</h2>
            </div>
            <div className="div-order-summery border-total">
            <p>Total</p> 
            <h2>RS {orderTotal()*0.05+orderTotal()}</h2>
            </div>
        </div>
    )
}

export default OrderSummery;