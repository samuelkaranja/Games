import "./TipInfo.css";
import Ball from "../../assets/images/football.png";
import { Link, useParams } from "react-router-dom";
import { Games } from "../../assets/data/Games";

const TipInfo = () => {
  const { id } = useParams();

  const tip = Games.find((game) => game.id === parseInt(id));

  if (!tip) {
    return <div>Tip not found</div>;
  }

  return (
    <div className="tipinfo">
      <div className="hd">
        <Link to="/">Back</Link>
      </div>
      <div className="info">
        <div className="l">
          <img src={Ball} alt="" />
          <span>{tip.league}</span>
        </div>
        <div className="t">
          <span>{tip.team1}</span>
          <span>{tip.odds}</span>
          <span>{tip.team2}</span>
        </div>
        <div className="w">
          <span>{tip.win} Win</span>
        </div>
      </div>
    </div>
  );
};

export default TipInfo;
