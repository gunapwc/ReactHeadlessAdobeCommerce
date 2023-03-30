import React, {useState,useEffect} from "react";
import CartTileFixed from "../cart tile/cartTileFixed";
import "./wishlist.scss"

const Wishlist = () => {
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
    return (
        <div className="wishlist">
            <h1>Favourites</h1>
            <div className="wishlist-inner">
                <ul>
                    <li>
                        {array.map((value, index) => {
                            return (
                                <CartTileFixed valuecart={value}/>
                            )
                        })}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Wishlist;