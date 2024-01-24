import React from "react";
import "./Login.css";
import Form from "../../components/Form/Form";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (formData) => {
    // Implement login logic using formData
    console.log("Logging in", formData);
  };

  const loginInputs = [
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
  ];

  return (
    <div className="login">
      <h1>Login</h1>
      <Form onSubmit={handleLogin} inputs={loginInputs} />
      <div className="log">
        <span>
          Do not have an account?? <Link to="/register">Register here</Link>{" "}
        </span>
        <Link to="/forgot_password">Forgot Password</Link>
      </div>
    </div>
  );
};

export default Login;
