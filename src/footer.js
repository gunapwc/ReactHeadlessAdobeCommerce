import React from "react";
import { Switch, Route, NavLink, Link, Redirect } from "react-router-dom";

import Logo from "./Assets/images/aster-online-pharmacy-logo.svg"; // Path to your logo.svg

export default function Footer() {
  return (
    <footer>
      <div className="section-container">
        <div className="footer-content footer-container-wrapper">
          <div className="footer-box">
            <div className="">
              <div className="footlogo">
                <Link to="/">
                  <img src={Logo} alt="Logo" className="logoimg h-50px" />
                </Link>
              </div>

              <div className="cont-numbers">
                <p>
                  <strong>Call: </strong>
                  <a href="tel:+971800700600">+971 800700600</a>
                </p>
                <p>
                  <strong>Whatsapp: </strong>
                  <a href="//api.whatsapp.com/send?phone=+971800700600">
                    +971 800700600
                  </a>
                </p>
                <p>
                  <strong>Whatsapp: </strong>
                  <a href="//api.whatsapp.com/send?phone=+971800700600">
                    +971 800700600
                  </a>
                </p>
              </div>

              <div className="cont-address">
                <p>
                  <strong>Corporate address </strong>
                </p>
                <p>Al Hudaiba Awards Building,</p>
                <p>Jumeirah Interchange Street,</p>
                <p>Dubai, UAE.</p>
              </div>
            </div>

            <div className="">
              <div>
                <p className="title">
                  <strong>Information</strong>
                </p>

                <ul id="footer-content" className="footer-link">
                  <li>
                    {" "}
                    <Link to={'/about-us'}>About Us </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link>Contact Us </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link>Privacy Policy </Link>{" "}
                  </li>
                  <li>
                    <Link>Terms &amp; Conditions </Link>{" "}
                  </li>
                  <li>
                    <Link>Delivery Information </Link>{" "}
                  </li>
                  <li>
                    <Link>Orders and Returns </Link>{" "}
                  </li>
                  <li>
                    <Link>Sell with us </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              <div className="footlogo">
                <div>
                  <p className="title">
                    <strong>Customer Care</strong>
                  </p>

                  <ul id="footer-content" className="footer-link">
                    <li>
                      {" "}
                      <Link>Help & FAQ</Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link>My Account </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link>Order History</Link>{" "}
                    </li>
                    <li>
                      <Link>Wishlist </Link>{" "}
                    </li>
                    <li>
                      <Link>Purchasing Policy </Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="">
              <p className="title">
                <strong>Newsletter</strong>
              </p>

              <p>
                Sign up for our mailing list for latest updates &amp; offers.
              </p>

              <div className="foot-email-box">
                <form>
                  <input
                    type=""
                    placeholder="Your email address"
                    className="email-input"
                  />

                  <button className="btn subscribe-btn"> Subscribe Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
