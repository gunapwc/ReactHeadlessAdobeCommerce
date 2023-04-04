import React, { useState, useEffect } from 'react';
import { Switch, Route, NavLink, Link, Redirect, useNavigate } from "react-router-dom";
import Logo from "./Assets/images/aster-online-pharmacy-logo.svg"; // Path to your logo.svg
import Logo2 from "./Assets/images/Aster_Secure_Logo.svg"; // Path to your logo.svg
import Profile from "./Assets/images/icon/Profile.svg";
import Cart from "./Assets/images/icon/Cart.svg";
import { useDispatch, useSelector } from 'react-redux';
import { incrementQunatityCart } from './redux/counterSlice';

import Select from 'react-select';
import CartTile from './cart tile/cartTile';
import CartTileFixed from './cart tile/cartTileFixed';

const options = [
    { value: 'All Categories', label: 'All Categories' },
    { value: 'Health Condition', label: 'Health Condition' },
    { value: 'Specialist Skincare', label: 'Specialist Skincare' },
    { value: 'Blood Pressure', label: 'Blood Pressure' },
    { value: 'Cough cold & Flu', label: 'Cough cold & Flu' },
    { value: 'Diabetes', label: 'Diabetes' },
];




function Header() {
    const [Close, setClose] = React.useState(true)
    const state1 = useSelector(state => state.cart.data);
    const Dispatch = useDispatch();
    const [data1, setData1] = useState([]);
    const Navigate = useNavigate();
    useEffect(() => {
        setData1(state1);
        document.addEventListener('click', handleClickOutside, true);
    }, [state1]);
    const updateQuantity = (index, value) => {
        let data = structuredClone(data1[index]);
        console.log(data);

        data.product_quantity = value;
        // debugger;
        Dispatch(incrementQunatityCart(data));
        window.location.reload();
    }
    const [selectedOption, setSelectedOption] = useState(null);
    const cartDilog = () => {

        let dialog = document.getElementsByClassName('cart-dialog')
        document.addEventListener('click', handleClickOutside, true);
        dialog[0].attributes[0].ownerElement.hidden = !dialog[0].attributes[0].ownerElement.hidden;

    };
    const handleClickOutside = (value) => {
        let dialog = document.getElementsByClassName('cart-dialog')
        if (value.target.classList != "cart-dialog" && value.target.offsetParent.classList != "cart-dialog")
            dialog[0].attributes[0].ownerElement.hidden = true;
    }
    const handleCartClick = () => {
        Navigate("../cart-page")
    }
    const onClose = () => {
        setClose(false)
    }

    return (
        <>
            <header>
                {Close ?

                    <div className="offermessage">
                        <div className="messages">Shop For AED 199 & Get Extra 10% Off*. Code: EXTRA10.*T&C </div>

                        <label className="close-header-top-ads cursorP" onClick={onClose}></label>
                    </div>
                    : false}

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
                                placeholder="Choose Category"
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
                                    <li> <Link to="/register">Register</Link></li>
                                    <li><Link to="/login">Signin</Link></li>
                                </ul>
                                {/* </Link> */}</div>


                            <div className='mycart' onClick={cartDilog}>
                                <img src={Cart} alt="Cart" />
                                <ul>
                                    <li><span className='text'> My Cart  </span> </li>
                                    <li> <span className='cart-count'>AED <span> 0 </span> </span></li>
                                </ul>
                                <span className='cart-qty'> 2</span>
                            </div>

                        </div>

                    </navbar>

                    <nav className="nav-items">

                        <Link className="nav-link"><span>New Arrivals </span></Link>
                        <Link className="nav-link"><span>Best Seller</span></Link>
                        <Link className="nav-link"><span>Category</span></Link>
                        <Link className="nav-link"><span>Brand</span></Link>
                        <Link className="nav-link" ><span>Offer</span></Link>
                        {/* to={'/product-list'} */}
                        <Link className="nav-link" to={'/order-summary'}><span>Track My Order</span></Link>
                        {/* to={'/track-order'} */}
                        <Link className="nav-link"><span>Clearance Sale</span></Link>

                    </nav>
                </div>
            </header>
            <div className='cart-dialog' hidden={true}>
                <div>
                    <div className='root-div'>
                        <ul>
                            {data1.map((value, index) => {
                                return (
                                    <li>
                                        {/* <CartTile valuecart={value} updatesquantity={(value1) => { updateQuantity(index, value1) }} ></CartTile>
                                         */}
                                        <CartTileFixed valuecart={value}></CartTileFixed>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='button-div1'>
                        <button onClick={handleCartClick}>Go to Cart</button>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Header;