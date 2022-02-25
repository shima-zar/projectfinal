import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import Home from "./components/Home.js";
import Signup from "./components/Signup.js";
import Profile from "./components/Profile.js";
import SwipePage from "./components/SwipePage.js";
import MatchBox from "./components/MatchBox.js";
import ChatBox from "./components/ChatBox.js";
import WorkOuts from "./components/WorkOuts.js";
import { useState } from "react";

function App() {
  const [showHeader, setShowHeader] = useState(false);

  const handleHeader = (status) => {
    setShowHeader(status);
  };

  return (
    <div className="App">
      {showHeader && <Header />}
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Home onGetStarted={handleHeader} />}
          ></Route>
          <Route path="/signup" exact component={Signup}>
            {/* Sign Up page */}
          </Route>
          <Route path="/workouts" exact component={WorkOuts}>
            {/* workouts page */}
          </Route>
          <Route path="/swipepage" exact component={SwipePage}>
            <Header />
            <TinderCards />
            {/* home page */}
            <SwipeButtons />
            {/* Buttons */}
            {/* swipe Page */}
          </Route>
          <Route path="/matchbox" exact component={MatchBox}>
            {/* <Header /> */}
            {/* Match box */}
          </Route>
          <Route path="/chatbox" exact component={ChatBox}>
            {/* <Header /> */}
            {/* Idividual chat screen */}
          </Route>
          <Route path="/profile" exact component={Profile}>
            {/* <Header /> */}
            {/* personal profile*/}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;