import React, { useEffect, useState } from "react";
import "../styles/_common.scss";
import "../styles/_spacing.scss";
import "../styles/Style.scss";
import { useSelector, useDispatch } from "react-redux";
import { incrementQunatityCart } from "../redux/counterSlice";
import CartTile from "../cart tile/cartTile";


const CartPage = () => {
    const Dispatch = useDispatch();
    // const Selector = useSelector();

    const state1 = useSelector(state => state.cart.data);
    const [data1, setData1] = useState([]);
    useEffect(() => {
        setData1(state1);
    }, [state1]);
    console.log(state1);
    const updateQuantity = (index, value) => {
        let data = structuredClone(data1[index]);
        console.log(data);

        data.product_quantity = value;
        // debugger;
        Dispatch(incrementQunatityCart(data));
        window.location.reload();

    }
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
                    {data1.map((value, index) => {
                        return (
                            <CartTile valuecart={value} updatesquantity={(value1) => { updateQuantity(index, value1) }}/>
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