import React, {useState,useEffect} from "react";
import OrderTile from "./ordertile";
import "./myorders.scss"

const MyOrders = (props) => {
   
    const [data1, setData1] = useState([]);
    useEffect(() => {
        setData1([{
            order_id:"34567",
            order_total:400,
            order_quantity:7,
            delivery_date:new Date("2023-05-12")
        },{
            order_id:"3456778",
            order_total:800,
            order_quantity:4,
            delivery_date:new Date("2023-05-12")
        }]);
    }, []);
    
    return (
        <div className="orders-root">
            <h1>My Orders</h1>
            <br />
            <div className="orders">
                <div className="orders-list">
                    <ul>
                        <li>
                            {data1.map((value, index) => {
                                return (
                                    <OrderTile value={value}/>
                                )
                            })}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default MyOrders;