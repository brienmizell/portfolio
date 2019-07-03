import React from "react";
import Animation from "./Animation";
import "./Home.css";

const Home = () => {
  return (
    <div className="around">
      <p className="pre">Hello, I'm</p>
      <Animation />
      <p className="post">I'm a full-stack web developer.</p>
    </div>
  );
};

export default Home;
