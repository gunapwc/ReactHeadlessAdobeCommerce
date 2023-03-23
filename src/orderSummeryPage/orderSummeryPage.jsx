import React, { useEffect, useState } from "react";
import CartTileFixed from "../cart tile/cartTileFixed";
import OrderSummery from "../orderSumery/orderSummery";

const OrderSummeryPage = () => {
    const [array,setArray] = useState([]);
    useEffect(()=>{

        setArray([{
            product_name: "Anythy Medicine",
            product_description: "Lower Gypsem text any text  Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text",
            product_quantity: 1,
            product_price: 100
        },
        {
            product_name: "Other Medicine ",
            product_description: "Lower Gypsem text any text  Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text",
            product_quantity: 2,
            product_price: 264
        }]);
    },[]);
    return(
        <div className="order-summery-page">
            <h1>Thank You Oder Confirmed.</h1>
            <div className="order-summery-list">
                <ul>
                    {array.map((value)=>{
                    return <li>
                        <CartTileFixed valuecart={value}/>
                    </li>
                    })
                }
                </ul>
            </div>
            <div className="order-summery-re">

            <OrderSummery  array={array}/>
            </div>

        </div>
    )
}

export default OrderSummeryPage;