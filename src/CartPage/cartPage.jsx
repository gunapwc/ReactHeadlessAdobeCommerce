import React, { useEffect, useState } from "react";
import "../styles/_common.scss";
import "../styles/_spacing.scss";
import "../styles/Style.scss";
import { useSelector, useDispatch } from "react-redux";
import { incrementQunatityCart } from "../redux/counterSlice";
import CartTile from "../cart tile/cartTile";
import OrderSummery from "../orderSumery/orderSummery";


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
                    <ul>
                        <li>
                            {data1.map((value, index) => {
                                return (
                                    <CartTile valuecart={value} updatesquantity={(value1) => { updateQuantity(index, value1) }} />
                                )
                            })}
                        </li>
                    </ul>
                </div>
                <div className="cart-detail1">

                    <OrderSummery array={data1} />

                    <div className="button-div">
                        <button>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;