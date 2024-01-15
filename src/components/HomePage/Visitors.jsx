import React from "react";
import "./Visitors.css";

const Visitors = () => {
  return (
    <div className="visitors">
      <div className="count">
        <span>
          Today's Tips -
          <span style={{ fontSize: 14 }}>Active Visitors 138308</span>
        </span>
      </div>
      <div className="date">
        <span style={{ fontSize: 13, fontWeight: "500" }}>2022/03/16</span>
      </div>
    </div>
  );
};

export default Visitors;
