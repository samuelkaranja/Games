import "./Topics.css";
import Ball from "../../assets/images/football.png";
import Premier from "../../assets/images/leagues/premier.png";
import Champions from "../../assets/images/leagues/link2.png";
import Europa from "../../assets/images/leagues/europa.png";

const Topics = () => {
  return (
    <div className="topics">
      <div className="hd">
        <img src={Ball} alt="" />
        <p>Topics</p>
      </div>
      <div className="tp_lgs">
        <div className="t">
          <img src={Premier} alt="" />
          <p>Premier League</p>
        </div>
        <div className="t">
          <img src={Champions} alt="" />
          <p>Champions League</p>
        </div>
        <div className="t">
          <img src={Europa} alt="" />
          <p>Europa League</p>
        </div>
      </div>
    </div>
  );
};

export default Topics;
