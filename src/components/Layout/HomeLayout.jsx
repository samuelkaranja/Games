import Help from "../Help/Help";
import Highlights from "../Highlights/Highlights";
import LeagueCard from "../LeagueCard/LeagueCard";
import "./style.css";

const HomeLayout = ({ content }) => {
  return (
    <div className="layout">
      <div className="container">
        <div className="left_column">
          <LeagueCard />
          <Highlights />
        </div>
        <div className="content">{content}</div>
        <div className="right_column">
          <Help title="Need Help?" number="0714134229" />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
