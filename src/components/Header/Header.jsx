import React from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" className="img" />
        </Link>
      </div>
      <div className="registration">
        <Link className="login" to="/login">
          LOGIN
        </Link>
        <Link to="/register" className="register">
          REGISTER
        </Link>
      </div>
    </div>
  );
};

export default Header;
