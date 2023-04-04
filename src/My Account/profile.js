import React, { useState, useEffect } from "react";
import "./profile.scss";

import accountProfile from "../gql/query_account_details.graphql";
import { useQuery } from "@apollo/client";

function Profile () {

    const { loading, error, data } = useQuery(accountProfile);

    const [setprofile, setProfile] = React.useState([]);
  
    React.useEffect(() => {
      console.log(data);

      console.log(localStorage.getItem('user_token'));
  
      if (data) {
        setProfile(data?.customer?.firstname);
        console.log(setprofile);

        console.log('firstname --> '+data?.customer?.firstname);

        console.log('firstname --> '+data?.customer?.addresses[0]['telephone']);


      }
    }, [data]);
  

  return (
    <div className="profile-body-wrap">


      <div className="profile-body">
     
        <h2 className="profile-head">Profile Information</h2>
      
        <div className="mb-3">
          <label for="name" className="new-form-block">
           Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control profile-field"
            value={data?.customer?.firstname + ' '+ data?.customer?.lastname}
            readonly
          />
        </div>
        <div className="mb-3">
          <label for="email" className="new-form-block">
            Email Id
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control profile-field"
            value={data?.customer?.email}
            readonly
          />
        </div>
        <div className="mb-3">
          <label for="number" className="new-form-block">
            Mobile Number
          </label>
          <input
            type="text"
            name="number"
            id="number"
            className="form-control profile-field"
            value={data?.customer?.addresses[0]['telephone']}
            readonly
          />
        </div>
      
      </div>


    </div>
  );
};

export default Profile;
