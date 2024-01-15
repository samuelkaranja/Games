import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <h1>Create Account</h1>
      <div className="frm">
        <form>
          <label>Enter Your Phone Number</label>
          <input type="tel" placeholder="07xxxxxxxx" />
          <label>Enter Password</label>
          <input type="password" placeholder="xxxxxxxxxx" />
          <label>Confirm Password</label>
          <input type="password" placeholder="xxxxxxxxxx" />
          <button className="reg_btn" type="submit">
            Enter
          </button>
        </form>
      </div>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
