import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/deposit">Deposit</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/livescore">Livescore</Link>
          </li>
          <li>
            <a href="/#">Standings</a>
          </li>
          <li>
            <a href="/#">Statements</a>
          </li>
          <li>
            <a href="/#">Yesterday</a>
          </li>
          <li>
            <a href="/#">How it Works</a>
          </li>
        </ul>
      </div>
      <div className="sms">
        <a href="/#">Send SMS</a>
      </div>
    </div>
  );
};

export default Navbar;
