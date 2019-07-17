import React from "react";
import Animation from "./Animation";
import PoweredBy from "./PoweredBy";
import "./Home.css";

const Home = () => {
  return (
    <div className="around">
      <Animation />
      <PoweredBy />
    </div>
  );
};

export default Home;
