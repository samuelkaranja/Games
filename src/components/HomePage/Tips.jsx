import React from "react";
import "./Tips.css";
import Ball from "../../assets/images/football.png";
import { Link } from "react-router-dom";

const Tips = ({ game }) => {
  const { id, team1, team2, league, date, time } = game;
  return (
    <div className="tips">
      <div className="head">
        <div className="lg">
          <img src={Ball} alt="" />
          <span>{league}</span>
        </div>
        <div className="time">
          <span>{date}</span>
          &nbsp;
          <span>{time}</span>
        </div>
      </div>
      <hr />
      <div className="teams">
        <div className="tm">
          <span>{team1}</span>
          <span>{team2}</span>
        </div>
        <div className="btn">
          <Link to={`/results/${id}`}>View Tip</Link>
        </div>
      </div>
    </div>
  );
};

export default Tips;
