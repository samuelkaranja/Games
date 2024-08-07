import Ball from "../../assets/images/football.png";
import "./style.css";
import { Link } from "react-router-dom";

const LiveGames = () => {
  return (
    <div className="livegames">
      <div className="league">
        <img src={Ball} alt="" />
        <span>English Premier League</span>
      </div>
      <Link to="/game_details" className="match">
        <div className="team1">
          <span>Manchester United</span>
          <img src={Ball} alt="" />
        </div>
        <div className="score">
          <span>4 - 4</span>
          <span>85'</span>
        </div>
        <div className="team2">
          <img src={Ball} alt="" />
          <span>Manchester City</span>
        </div>
      </Link>
    </div>
  );
};

export default LiveGames;
