import { HomeLayout, LiveGames, LivescoreNavbar } from "../../components";
import "./style.css";

const Livescore = () => {
  const Content = (
    <div className="livescore">
      <LivescoreNavbar />
      <LiveGames />
    </div>
  );
  return <HomeLayout content={Content} />;
};

export default Livescore;
