import React from "react";
import { useState } from "react";
import "../styles/_common.scss"
const Quantity = (props) => {
    const [value,setValue] = useState(0);
    const increment = () => {
        setValue(value+1);
    }
    const decrement = () => {
        if(value>0){
            setValue(value-1);
        }
        else{
            setValue(0);
        }
    }

    return(
        <>
            <div className="quantity">
                <button onClick={increment}>+</button>
                <input value={value}></input>
                <button onClick={decrement}>-</button>
            </div>
        </>
    )
}
export default Quantity;