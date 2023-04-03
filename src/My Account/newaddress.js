import React, {useState,useEffect} from "react";
import "./newaddress.scss"


const NewAddress = () => {
    return (
        <div className="new-address-body-wrap">
            <div className="new-address-body">
                <h2 className="address-head">Add Address</h2>
                    <form className="new-address-form-wrap" action="#">
                        <div className="mb-3">
                            <label for="name" className="new-form-block">Full Name</label>
                            <input type="text" name="name" id="name" className="form-control new-form-field" placeholder="Enter Your Name" required="" />
                        </div>
                        <div className="mb-3">
                            <label for="mobile" className="new-form-block">Mobile Number</label>
                            <input type="tel" name="mobile" id="mobile" placeholder="Enter Your Number" className="form-control new-form-field" required="" />
                        </div>
                        <div className="mb-3">
                            <label for="loc" className="new-form-block">Location</label>
                            <select type="number" name="loc" id="loc" className="form-control new-form-field" >
                                <option value="select">Select Location</option>
                                <option value="saidapet">Saidapet</option>
                                <option value="guindy">Guindy</option>
                                <option value="vellachery">Vellachery</option>
                            </select>                           
                            <span className="loc-auto">Tap to auto fill the address fields</span>
                        </div>
                        <div className="mb-3">
                            <label for="pincode" className="new-form-block">PIN Code*</label>
                            <input type="tel" name="pincode" id="pincode" placeholder="Enter Your PIN Code" className="form-control new-form-field" required="" />
                        </div>
                        <div className="mb-3">
                            <label for="flat" className="new-form-block">Flat / House No*</label>
                            <input type="text" name="flat" id="flat" placeholder="Enter Your Flat / House No" className="form-control new-form-field" required="" />
                        </div>
                        <div className="mb-3">
                            <label for="apartment" className="new-form-block">Building / Apartment Name*</label>
                            <input type="text" name="apartment" id="apartment" placeholder="Enter Your Building / Apartment Name" className="form-control new-form-field" required="" />
                        </div>
                        <div className="mb-3">
                            <label for="address" className="new-form-block">Address*</label>
                            <input type="text" name="address" id="address" placeholder="Enter Your Address" className="form-control new-form-field" required="" />
                        </div>
                        <div className="mb-3">
                            <label for="area" className="new-form-block">Landmark / Area*</label>
                            <input type="text" name="area" id="area" placeholder="Enter Your Landmark / Area" className="form-control new-form-field" required="" />
                        </div>
                        <div className="mb-3">
                            <label for="city" className="new-form-block">City</label>
                            <select type="text" name="city" id="city" className="form-control new-form-field" >
                                <option value="select">Select City</option>
                                <option value="chennai">Chennai</option>
                                <option value="mumbai">Mumbai</option>
                                <option value="gurgaon ">Gurgaon </option>
                            </select>                             
                        </div>
                        <div className="mb-3">
                            <label for="state" className="new-form-block">State</label>
                            <select type="text" name="state" id="state" className="form-control new-form-field" >
                                <option value="select">Select state</option>
                                <option value="tamilnadu">Tamil Nadu</option>
                                <option value="maharashtra">Maharashtra</option>
                                <option value="delhi">Delhi</option>
                            </select>                            
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="new-saveas-btn">Save as</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <a href="javascript:void(0)" className="saveas-btn-link mr-2">
                                    <button>Home</button>
                                </a>
                                <a href="javascript:void(0)" className="saveas-btn-link mr-2">
                                    <button>Work</button>
                                </a>
                                <a href="javascript:void(0)" className="saveas-btn-link">
                                    <button>Others</button>
                                </a>
                            </div>
                        </div>
                        <div className="mb-0 save-address-btn">
                            <input type="submit" value="Save Address" />
                        </div>
                        
                  </form>
            </div>
        </div>

        

    );
};

export default NewAddress;