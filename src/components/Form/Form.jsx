import React, { useState } from "react";
import "./style.css";

const Form = ({ onSubmit, inputs }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.name,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="frm">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <div key={input.name}>
            <label>{input.label}</label>
            <input
              type={input.type}
              name={input.name}
              value={formData[input.name] || ""}
              placeholder={input.placeholder}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Form;
