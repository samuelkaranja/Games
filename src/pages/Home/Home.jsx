import React from "react";
import "./Home.css";
import Banner from "../../assets/images/banner.jpeg";
import Visitors from "../../components/HomePage/Visitors";
import { HomeLayout, Tips, ToggleText } from "../../components";
import { Games } from "../../assets/data/Games";

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
          {Games.map((game) => {
            return <Tips key={game.id} game={game} />;
          })}

          <ToggleText />
        </div>
      </div>
    </div>
  );
  return <HomeLayout content={Content} />;
};

export default Home;
