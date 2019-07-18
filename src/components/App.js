import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
// import Interests from "./Interests";
import Header from "./Header";
import React from "react";
// import HeaderTest from "./HeaderTest";
import history from "../history";
// import Footer from "./Footer";
import MusicApp from "./MusicApp";
import Pictures from "./Pictures";
import DateCountdown from "./DateCountdown";
import Animation from "./Animation";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
// import StickyFooter from "react-sticky-footer";

const App = () => {
  return (
    <div style={{ flex: "1" }}>
      <HashRouter history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={AboutMe} />
          <Route path="/music" exact component={MusicApp} />
          <Route path="/pictures" exact component={Pictures} />
          <Route path="/countdown" exact component={DateCountdown} />
          <Route path="/animation" exact component={Animation} />
          <Route path="/resume" exact component={Resume} />
        </Switch>

        {/* <Footer /> */}
      </HashRouter>
    </div>
  );
};

export default App;
