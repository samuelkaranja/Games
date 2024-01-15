import React from "react";
import "./Highlights.css";
import { FaAngleRight } from "react-icons/fa";
import Ball from "../../assets/images/football.png";

const Highlights = () => {
  return (
    <div className="highlights">
      <div className="ht">
        <div className="hd">
          <span>Highlights</span>
          <a href="">
            <FaAngleRight size={18} />
          </a>
        </div>
        <div className="gm">
          <img src={Ball} alt="" />
          <div className="t">
            <span className="teams">FC Vlasim vs AC Sparta Prague B</span>
            <span className="date">13 Apr 17:30 - English premier league</span>
          </div>
        </div>

        <div className="gm">
          <img src={Ball} alt="" />
          <div className="t">
            <span className="teams">FC Vlasim vs AC Sparta Prague B</span>
            <span className="date">13 Apr 17:30 - English premier league</span>
          </div>
        </div>

        <div className="gm">
          <img src={Ball} alt="" />
          <div className="t">
            <span className="teams">FC Vlasim vs AC Sparta Prague B</span>
            <span className="date">13 Apr 17:30 - English premier league</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
