import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="">
          <span>Oasis Tips</span>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Deposits</a>
            </li>
            <li>
              <a href="">Statements</a>
            </li>
            <li>
              <a href="">Yesterday</a>
            </li>
          </ul>
        </div>
        <div className="">
          <span>Contact Us</span>
          <ul>
            <li>0700-000-000</li>
            <li>0722-222-222</li>
            <li>Support@oasistips.com</li>
          </ul>
        </div>
        <div className="">
          <span>Support</span>
          <ul>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Resposible Gaming</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Free tips</a>
            </li>
          </ul>
        </div>
        <div className="">
          <span>Socials</span>
          <ul>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <hr />
      <div className="copyright">
        <span>&copy;2022 | All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
