import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./myaccount.scss";

const MyAccount = () => {
    const Navigate = useNavigate();
    const [menu, setMenu] = useState([])
    useEffect(() => {
        setMenu([
            {
                key: "MyAccount",
                name: "My Account",
                link: ""
            },
            {
                key: "SavedAddress",
                name: "Saved Address",
                link: "savedaddress"
            },
            {
                key: "OrderDetails",
                name: "Order Details",
                link: "orderdetails"
            },
            {
                key: "Favourite",
                name: "Favourite",
                link: "favourite"
            },
            {
                key: "ChangePassword",
                name: "Change Password",
                link: "changepassword"
            },
            {
                key: "Logout",
                name: "Logout",
                link: "Logout"
            }
        ])
    },[])
    return (
        <div className="my-account">
            <div className="my-account-menu">
                <ul>
                    {menu.map((value) => {
                        return (
                            <li key={value.key}>
                                    <div className="my-account-menuitem" onClick={()=>{ Navigate(value.link);}}>
                                        <h1>
                                            {value.name}
                                        </h1>
                                    </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="my-account-detail">
                <Outlet/>
            </div>
        </div>
    )
}

export default MyAccount;