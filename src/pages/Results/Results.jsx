import { Help, Highlights, LeagueCard, TipInfo } from "../../components";
import "./Results.css";

const Results = () => {
  return (
    <div className="results">
      <div className="container">
        <div className="left_sidebar">
          <LeagueCard />
          <Highlights />
        </div>
        <div className="main">
          <TipInfo />
        </div>
        <div className="right_sidebar">
          <Help title="Need Help?" number="0714134229" />
        </div>
      </div>
    </div>
  );
};

export default Results;
