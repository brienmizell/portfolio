import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Interests from "./Interests";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
      <h5 path="/about" component={About} />
      <h5 path="/projects" component={Projects} />
      <h5 path="/contact" component={Contact} />
      <h5 path="/interests" component={Interests} />
      {/* <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/interests" component={Interests} />
      </Switch> */}
    </div>
  );
};

export default App;
