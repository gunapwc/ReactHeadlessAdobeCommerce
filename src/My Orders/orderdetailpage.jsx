import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import CartTileFixed from "../cart tile/cartTileFixed";
import OrderSummery from "../orderSumery/orderSummery";

const OrderDetailPage = () => {
    let { orderId } = useParams();
    console.log(orderId);
      
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
            <h1>Thank You Order Confirmed</h1>
            <div className="order-summery-list">
                <ul>
                    {array.map((value)=>{
                    return <li key = { value.product_name}>
                        <CartTileFixed valuecart={value}/>
                    </li>
                    })
                }
                </ul>
            </div>
            <div className="order-summery-re">

            <OrderSummery  array={array}/>
            </div>

            <div className="order-continue-btn">
                <button>Continue Shopping</button>
            </div>

        </div>
    )
}

export default OrderDetailPage;