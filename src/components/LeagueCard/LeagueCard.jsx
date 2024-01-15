import React from "react";
import "./LeagueCard.css";
import Premier from "../../assets/images/leagues/premier.png";
import Liga from "../../assets/images/leagues/laliga.png";
import SerieA from "../../assets/images/leagues/europa.png";
import Bundesliga from "../../assets/images/leagues/bundesliga.png";
import { FaAngleRight } from "react-icons/fa";

const LeagueCard = () => {
  return (
    <div className="leaguecard">
      <div className="leagues">
        <div className="hd">
          <span>Top Leagues</span>
          <a href="">
            <FaAngleRight size={18} />
          </a>
        </div>
        <div className="lgs">
          <div className="l">
            <img src={Premier} alt="" />
            <a href="">Premier League</a>
          </div>

          <div className="l">
            <img src={Liga} alt="" />
            <a href="">La Liga</a>
          </div>

          <div className="l">
            <img src={SerieA} alt="" />
            <a href="">Serie A</a>
          </div>

          <div className="l">
            <img src={Bundesliga} alt="" />
            <a href="">Bundesliga</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueCard;
