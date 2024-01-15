import "./TipInfo.css";
import Ball from "../../assets/images/football.png";
import { Link } from "react-router-dom";

const TipInfo = () => {
  return (
    <div className="tipinfo">
      <div className="hd">
        <Link to="/">Back</Link>
      </div>
      <div className="info">
        <div className="l">
          <img src={Ball} alt="" />
          <span>English Premier League</span>
        </div>
        <div className="t">
          <span>Manchester United</span>
          <span>1.80</span>
          <span>Arsenal</span>
        </div>
        <div className="w">
          <span>Home Win</span>
        </div>
      </div>
    </div>
  );
};

export default TipInfo;
