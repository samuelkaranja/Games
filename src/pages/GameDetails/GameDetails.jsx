import React from "react";
import "./style.css";
import { HomeLayout, LivescoreNavbar } from "../../components";

const GameDetails = () => {
  const Content = () => {
    <div className="gamedetails">
      <LivescoreNavbar />
    </div>;
  };

  return <HomeLayout content={Content} />;
};

export default GameDetails;
