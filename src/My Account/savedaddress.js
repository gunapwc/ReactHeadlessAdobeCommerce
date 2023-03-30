import React, {useState,useEffect} from "react";
import { Switch, Route, NavLink, Link, Redirect, useNavigate } from "react-router-dom";
import "./savedaddress.scss"

const SavedAddress = () => {
    return (
        <>
        <div className="saved-address-body-wrap">
            <div className="saved-address-body">
                <h2 className="saved-address-title">Manage Addresses</h2>
                <div className="row">
                    <div className="col-md-6">                   
                        <div className="home-address"> 
                            <div className="home-icon">
                                <i class="fa fa-home"></i>
                            </div>                      
                            <h4 className="home-add-title">Home</h4>
                            <p className="home-loc">7th Floor, Menon Eternity, 165, St Marys Rd, Austin Nagar, Alwarpet, Chennai, Tamil Nadu 600018</p>
                            <div className="home-add-wrap">
                                <a href="javascript:void(0)" className="home-edit-link">Edit</a>
                                <a href="javascript:void(0)" className="home-edit-delete">Delete</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="office-address">
                             <div className="office-icon">
                                <i class="fa fa-bookmark"></i>
                            </div> 
                            <h4 className="office-add-title">Office</h4>
                            <p className="office-loc">7th Floor, Menon Eternity, 165, St Marys Rd, Austin Nagar, Alwarpet, Chennai, Tamil Nadu 600018</p>
                            <div className="office-add-wrap">
                                <a href="javascript:void(0)" className="office-edit-link">Edit</a>
                                <a href="javascript:void(0)" className="office-edit-delete">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <Link to="/newaddress">
                            <a href="javascript:void(0)" className="new-add-link">
                                <div className="new-address">
                                    <span className="new-add-title"><i class="fa fa-plus-circle"></i></span>
                                    <p className="new-loc">Add New Address</p> 
                                </div>
                            </a> 
                        </Link>
                    </div>
                </div>  

            </div>
        </div>

        <div className="save-btn-wrap">
            <button>Save</button>
        </div>
        </>

    );
};

export default SavedAddress;