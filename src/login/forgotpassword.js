import React, { useState } from "react";
import "./forgotpassword.scss";

const ForgotPassword = () => {
  
  return (
    <>
     <section className="forgot-password-body">
  <div className="forgot-password-wrap">
      
      <div className="forgot-pass-content">
          <div className="forgot-pass-body-wrap">
          <h1 className="password-heading">
                  Reset Your Password
              </h1>
              <form className="pass-form-wrap" action="#">
                  <div className="pass-form-block">
                      <label for="email" className="block mb-2">Your email</label>
                      <input type="email" name="email" id="email" className="pass-padd" placeholder="name@company.com" required="" />
                  </div>
                 
                  
                  <button type="submit" className="pass-reset-link">Send Reset link</button>
                  <p className="reset-wrap">
                      Don’t have an account yet? <a href="#" className="reset-signup">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
  );
};

export default ForgotPassword;
