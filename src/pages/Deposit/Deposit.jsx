import { Help, Highlights, LeagueCard, Pricing } from "../../components";
import "./Deposit.css";

const Deposit = () => {
  return (
    <div className="deposit">
      <div className="container">
        <div className="left_sidebar">
          <LeagueCard />
          <Highlights />
        </div>
        <div className="content">
          <Pricing />
        </div>
        <div className="right_sidebar">
          <Help title="Need Help?" number="0714134229" />
        </div>
      </div>
    </div>
  );
};

export default Deposit;
