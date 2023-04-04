import "./login.scss";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import mutationLogin from "../gql/query_sign_in.graphql";
import { useQuery,useMutation } from '@apollo/client';

const Login = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const [submitLoginForm] = useMutation(mutationLogin, {
    fetchPolicy: "no-cache",
    onCompleted: (response) => {
      if (response.generateCustomerToken.token) {
        // localStorage.setItem('user_token', JSON.stringify(response.generateCustomerToken['token']));
        localStorage.setItem('user_token', response.generateCustomerToken.token);
      }
      var hh = localStorage.getItem('user_token');
      console.log(hh);

      console.log("token--> " +response.generateCustomerToken.token);

    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (data) => {
    submitLoginForm({ variables:  data });
    console.log(data);
  };

  return (
    <>
      <section className="login-page">
        <div className="login-wrap">
            <div className="login-wrap-section">
              <div className="login-body">
                <h1 className="login-heading mb-4">Sign in to your account</h1>
                <form className="login-form-wrap" action="#" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-block">
                      Your email
                    </label>

                    <input {...register("email", { required: true })}
                      type="email"
                      className="form-control form-field"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-block">
                      Password
                    </label>
                    <input {...register("password", { required: true })}
                      type="password"
                    
                      placeholder="••••••••"
                      className="form-control form-field"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-start">
                      <div className="flex items-center">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="form-control form-field"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a href="#" className="text-sm">
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="text-dark text-btn-signin mb-3"
                  >
                    Sign in
                  </button>
                  <p className="text-sm">
                    Don’t have an account yet?{" "}
                    <a href="#" className="font-medium signup-btn">
                      Sign up
                    </a>
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
