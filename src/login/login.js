import React from "react";
import "./login.scss"

const Login = () => {
    return (

        <>
    
    <section className="login-page">
  <div className="login-wrap">
      
      <div className="login-wrap-section">
          <div className="login-body">
              <h1 className="login-heading mb-4">
                  Sign in to your account
              </h1>
              <form className="login-form-wrap" action="#">
                  <div className="mb-3">
                      <label for="email" className="form-block">Your email</label>
                      <input type="email" name="email" id="email" className="form-control form-field" placeholder="name@company.com" required="" />
                  </div>
                  <div className="mb-3">
                      <label for="password" className="form-block">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="form-control form-field" required="" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                      <div className="flex items-start">
                          <div className="flex items-center">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="form-control form-field" required="" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm">Forgot password?</a>
                  </div>
                  <button type="submit" className="text-dark text-btn-signin mb-3">Sign in</button>
                  <p className="text-sm">
                      Don’t have an account yet? <a href="#" className="font-medium signup-btn">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
       
      </>

    );
};

export default Login;
