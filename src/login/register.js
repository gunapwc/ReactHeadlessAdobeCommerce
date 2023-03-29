import React from "react";
import "./register.scss"

const Register = () => {
    return (

        <>
    
    
<div class="register-body">
            <div class="register-body-wrap">
            <h1 class="mb-4 text-center signup-heading">Sign up</h1>
                <div class="register-wrap">
                    <h1 class="mt-2 signup-title">Personal Information</h1>
                    <input 
                        type="text"
                        class="form-block"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        class="form-block"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="text"
                        class="form-block"
                        name="mobile"
                        placeholder="Mob No" />

                    <input 
                        type="password"
                        class="form-block"
                        name="password"
                        placeholder="Password" />
                        
                    <input 
                        type="password"
                        class="form-block"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="text-center btn-center"
                    >Create Account</button>

                    <div class="text-center text-sm text-grey-dark mt-4 mb-2">
                        By signing up, you agree to the 
                        <a class="text-grey text-privacy" href="#">
                            Terms of Service
                        </a> and  
                        <a class="text-grey text-privacy" href="#">
                             Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark sign-bottom mt-8">
                    Already have an account? 
                    <a class="text-blue text-login" href="../login/">
                        Log in
                    </a>
                </div>
            </div>
        </div>
       
      </>

    );
};

export default Register;
