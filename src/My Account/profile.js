import React, {useState,useEffect} from "react";
import "./profile.scss"


const Profile = () => {
    return (
        <div className="profile-body-wrap">
            <div className="profile-body">
                <h2 className="profile-head">Profile Information</h2>
                    <div className="mb-3">
                        <label for="name" className="new-form-block">Full Name</label>
                        <input type="text" name="name" id="name" className="form-control profile-field" value="John Smith" readonly />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="new-form-block">Email Id</label>
                        <input type="email" name="email" id="email" className="form-control profile-field" value="johnsmith@pwc.com"  readonly />
                    </div>
                    <div className="mb-3">
                        <label for="number" className="new-form-block">Mobile Number</label>
                        <input type="text" name="number" id="number" className="form-control profile-field" value="+91-9876543210" readonly />
                    </div>
                 
            </div>
        </div>

        

    );
};

export default Profile;