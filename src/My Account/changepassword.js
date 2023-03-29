import React, {useState,useEffect} from "react";
import "./changepassword.scss"

const ChangePassword = () => {
    return (

        <div className="change-password-wrap">
        
        <div className="pass-wrap">
           
            <div className="wrap-heading">
                <h2 className="wrap-title">
                    Change Password
                </h2>
                <form className="mt-4" action="#">
                    <div className="pass-padding mb-3">
                        <label for="email" className="form-block">Your Email</label>
                        <input type="email" name="email" id="email" className="form-control form-field" placeholder="name@company.com" required="" />
                    </div>
                    <div className="pass-padding mb-3">
                        <label for="password" className="form-block">New Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="form-control form-field" required="" />
                    </div>
                    <div className="pass-padding mb-4">
                        <label for="confirm-password" className="form-block" >Confirm Password</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="form-control form-field" required="" />
                    </div>
                    <div className="pass-checkbox d-flex align-items-center justify-content-start mb-5">
                        <div className="check-wrap">
                          <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="form-control " required="" />
                        </div>
                        <div className="ml-3">
                          <label for="newsletter" className="font-light mb-0">I accept the <a className="font-medium text-color" href="#">Terms and Conditions</a></label>
                        </div>
                    </div>
                    <button type="submit" className="text-dark">Reset Password</button>
                </form>
            </div>
        </div>
        
      </div>

    );
};

export default ChangePassword;
