import React from "react";
import "./register.scss";

import { useForm } from "react-hook-form";

import mutationRegister from "../gql/query_sign_up.graphql";
import { useQuery,useMutation } from '@apollo/client';

const Register = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
    const [submitRegisterForm] = useMutation(mutationRegister, {
      fetchPolicy: "no-cache",
      onCompleted: (response) => {
        console.log(response);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  
    const onSubmit = (data) => {
      submitRegisterForm({ variables:  data });
      console.log(data);
    };

  return (
    <>
      <div className="register-body">
        <div className="register-body-wrap">

        <form className="login-form-wrap" action="#" onSubmit={handleSubmit(onSubmit)}>
         
          <h1 className="mb-4 text-center signup-heading">Sign up</h1>
          
          <div className="register-wrap">

            <h1 className="mt-2 signup-title">Personal Information</h1>
           
            <input {...register("firstname", { required: true })}
              type="text"
              className="form-block"
              required
              placeholder="First Name"
            />

            <input {...register("lastname", { required: true })}
              type="text"
              className="form-block"
              placeholder="Last Name"
              required
            />
            
            <input {...register("email", { required: true })}
              type="text"
              className="form-block"
              placeholder="Email"
              required
            />

            <input {...register("password", { required: true })}
              type="password"
              className="form-block"
              placeholder="Password"
              required
            />

            <button type="submit" className="text-center btn-center">
              Create Account
            </button>

            <div className="text-center text-sm text-grey-dark mt-4 mb-2">
              By signing up, you agree to the
              <a className="text-grey text-privacy" href="#">
                Terms of Service
              </a>{" "}
              and
              <a className="text-grey text-privacy" href="#">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark sign-bottom mt-8">
            Already have an account?
            <a className="text-blue text-login" href="../login/">
              Log in
            </a>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
