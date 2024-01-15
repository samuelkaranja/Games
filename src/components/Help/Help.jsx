import React from "react";
import "./Help.css";

const Help = ({ title, number }) => {
  return (
    <div className="help">
      <ul>
        <li>{title}</li>
        <li>{number}</li>
      </ul>
    </div>
  );
};

export default Help;
