import React from "react";
import Form from "../../components/Form/Form";

const ForgotPassword = () => {
  const handleForgotPassword = (formData) => {
    console.log("Resetting password", formData);
  };

  const forgotPasswordInput = [
    {
      label: "Enter Your Phone Number",
      type: "number",
      name: "phonenumber",
      placeholder: "07xxxxxxxx",
    },
  ];

  return (
    <div className="forgotpassword" style={{ padding: "20px 0 130px 0" }}>
      <h1 style={{ color: "green", paddingBottom: "20px" }}>Reset Password</h1>
      <Form onSubmit={handleForgotPassword} inputs={forgotPasswordInput} />
    </div>
  );
};

export default ForgotPassword;
