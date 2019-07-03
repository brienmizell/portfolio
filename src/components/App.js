import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
// import Interests from "./Interests";
import About from "./About";
import Header from "./Header";
// import HeaderTest from "./HeaderTest";
import history from "../history";
import Footer from "./Footer";
import MusicApp from "./MusicApp";
import Pictures from "./Pictures";
import DateCountdown from "./DateCountdown";
import Animation from "./Animation";
// import StickyFooter from "react-sticky-footer";

const App = () => {
  return (
    <div style={{ flex: "1" }}>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
          <Route path="/music" exact component={MusicApp} />
          <Route path="/pictures" exact component={Pictures} />
          <Route path="/countdown" exact component={DateCountdown} />
          <Route path="/animation" exact component={Animation} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
