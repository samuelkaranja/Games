import React from "react";
import "./Home.css";
import Banner from "../../assets/images/banner.jpeg";
import Visitors from "../../components/HomePage/Visitors";
import { HomeLayout, Tips, ToggleText } from "../../components";

const Home = () => {
  const Content = (
    <div className="home">
      <div className="banner">
        <img src={Banner} alt="" />
      </div>
      <Visitors />
      <div className="tp">
        <div className="tt">
          <span className="title">Today's Tips</span>
          <span></span>
        </div>
        <div>
          <Tips
            league="English Premier League"
            date="2022/03/16"
            time="20:00:00"
            team1="Manchester United"
            team2="Arsenal"
          />
          <Tips
            league="English Premier League"
            date="2022/03/20"
            time="20:00:00"
            team1="Chelsea"
            team2="Manchester City"
          />
          <Tips
            league="La Liga"
            date="2022/03/18"
            time="20:00:00"
            team1="Barcelona"
            team2="Atletico Madrid"
          />
          <Tips
            league="Asian/ Asian Cup"
            date="2024/1/19"
            time="14:30:00"
            team1="Iraq"
            team2="Japan"
          />
          <ToggleText />
        </div>
      </div>
    </div>
  );
  return <HomeLayout content={Content} />;
};

export default Home;
