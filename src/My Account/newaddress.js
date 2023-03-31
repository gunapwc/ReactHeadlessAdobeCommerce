import React, {useState,useEffect} from "react";
import "./newaddress.scss"


const NewAddress = () => {
    return (
        <div className="new-address-body-wrap">
            <div className="new-address-body">
                    <form className="new-address-form-wrap" action="#">
                        <div className="mb-3">
                            <label for="email" className="new-form-block">Your email</label>
                            <input type="email" name="email" id="email" className="form-control new-form-field" placeholder="name@company.com" required="" />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="new-form-block">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="form-control new-form-field" required="" />
                        </div>
                  </form>
            </div>
        </div>

        

    );
};

export default NewAddress;