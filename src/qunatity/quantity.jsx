import React from "react";
import { useState } from "react";
import "../styles/_common.scss"
const Quantity = (props) => {
    const [value,setValue] = useState(props.value);
    const increment = () => {
        setValue(value+1);
        props.updateValue(value+1);
    }
    const decrement = () => {
        if(value>0){
            setValue(value-1);
             props.updateValue(value-1);
        }
        else{
            setValue(0);
            props.updateValue(0);
        }
    }

    return(
        <>
            <div className="quantity">
                <button onClick={increment}>+</button>
                <input value={value} contentEditable={false} readOnly></input>
                <button onClick={decrement}>-</button>
            </div>
        </>
    )
}
export default Quantity;