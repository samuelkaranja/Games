import React from "react";
import "./Register.css";
import Form from "../../components/Form/Form";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (formData) => {
    console.log("Creating account", formData);
  };

  const registerInputs = [
    {
      label: "Enter Your Phone Number",
      type: "number",
      name: "phonenumber",
      placeholder: "07xxxxxxxx",
    },
    {
      label: "Enter Password",
      type: "password",
      name: "password",
      placeholder: "**********",
    },
    {
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      placeholder: "**********",
    },
  ];

  return (
    <div className="register">
      <h1>Create Account</h1>
      <Form onSubmit={handleRegister} inputs={registerInputs} />
      <div className="sign">
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
