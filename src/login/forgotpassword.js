import React, { useState } from "react";
import "./forgotpassword.scss";

import { useForm } from "react-hook-form";

import mutationResetLink from "../gql/query_reset_link.graphql";
import { useQuery, useMutation } from "@apollo/client";

import { NotificationManager } from 'react-notifications';


const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [submitResetLink] = useMutation(mutationResetLink, {
    fetchPolicy: "no-cache",
    onCompleted: (response) => {
      console.log(response);
      NotificationManager.success('We have e-mailed your password reset link!', 'success!', 2000);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (data) => {
    submitResetLink({ variables: data });
    console.log(data);
  };

  return (
    <>
      <section className="forgot-password-body">
        <div className="forgot-password-wrap">
          <div className="forgot-pass-content">
            <div className="forgot-pass-body-wrap">
              <h1 className="password-heading">Reset Your Password</h1>
              <form className="pass-form-wrap" action="#"  onSubmit={handleSubmit(onSubmit)}>
                <div className="pass-form-block">
                  <label for="email" className="block mb-2">
                    Your email
                  </label>
                  <input {...register("email", { required: true })}
                    type="email"
                    className="pass-padd"
                    placeholder="name@company.com"
                    required
                  />
                </div>

                <button type="submit" className="pass-reset-link">
                  Send Reset link
                </button>
                <p className="reset-wrap">
                  Don’t have an account yet?{" "}
                  <a href="#" className="reset-signup">
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

export default ForgotPassword;
