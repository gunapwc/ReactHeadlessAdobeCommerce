import React,{useState} from 'react';
import { Switch, Route, NavLink, Link, Redirect } from "react-router-dom";
import Logo from "./Assets/images/aster-online-pharmacy-logo.svg"; // Path to your logo.svg
import Logo2 from "./Assets/images/Aster_Secure_Logo.svg"; // Path to your logo.svg
import Profile from "./Assets/images/icon/Profile.svg";
import Cart from "./Assets/images/icon/Cart.svg";

import Select from 'react-select';

const options = [
    { value: 'All Categories', label: 'All Categories' },
    { value: 'Health Condition', label: 'Health Condition' },
    { value: 'Specialist Skincare', label: 'Specialist Skincare' },
    { value: 'Blood Pressure', label: 'Blood Pressure' },
    { value: 'Cough cold & Flu', label: 'Cough cold & Flu' },
    { value: 'Diabetes', label: 'Diabetes' },
];




function Header() {
    const [Close, setClose] =React.useState(true)
    const [selectedOption, setSelectedOption] = useState(null);

    const onClose = () => {
        setClose(false)
    }

    return (
        <header>
                  { Close ? 

            <div className="offermessage">
                <div className="messages">Shop For AED 199 & Get Extra 10% Off*. Code: EXTRA10.*T&C </div>

                <label class="close-header-top-ads cursorP" onClick={onClose}></label>
            </div>
             : false }

            <div className='header-container'>
                <navbar className="navhead">
                    <div className="logo">
                        <Link to="/App">
                            {/* <img src={require("")} alt="Logo" /> */}
                            <img src={Logo} alt="Logo" className='logoimg' />
                        </Link>
                    </div>

                    <div className="searchsec">
                        
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            placeholder="choose category"
                            readonly />

                        <form>

                            <input type="text" className='searchinput' placeholder='What are you looking for' />

                        </form>
                    </div>


                    <div className="headers-signin-part">
                        <Link to="">
                            <img src={Logo2} alt="Logo" className='secure-logo' />
                        </Link>

                        {/* <Link to=""> */}
                        <div className='authorization-link'>
                            <img src={Profile} alt="Profile" />
                            <ul >
                                <li>Register</li>
                                <li>Signin</li>
                            </ul>
                            {/* </Link> */}</div>

                        <Link to="">

                            <div className='mycart'>
                                <img src={Cart} alt="Cart" />
                                <ul>
                                    <li><span className='text'> My Cart  </span> </li>
                                    <li> <span className='cart-count'>AED <span> 0 </span> </span></li>
                                </ul>
                                <span className='cart-qty'> 0</span>
                            </div>
                        </Link>

                    </div>

                </navbar>

                <nav className="nav-items sticky-top">

                    <Link class="nav-link"><span>New Arrivals </span></Link>
                    <Link class="nav-link"><span>Best Seller</span></Link>
                    <Link class="nav-link"><span>Category</span></Link>
                    <Link class="nav-link"><span>Brand</span></Link>
                    <Link class="nav-link"><span>Offer</span></Link>
                    <Link class="nav-link" to={'/track-order'}><span>Track My Order</span></Link>
                    <Link class="nav-link"><span>Clearance Sale</span></Link>

                </nav>
            </div>
        </header>
    )

}

export default Header;