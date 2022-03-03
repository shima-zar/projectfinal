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
import { useState, useEffect } from "react";
import ChatScreen from "./components/ChatScreen.js";

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          <Route path="/profile" exact component={Profile}>
            {/* <Header /> */}
            {/* Profile page */}
          </Route>
          <Route path="/workouts" exact component={WorkOuts}>
            {/* <Header /> */}
            {/* workouts page */}
          </Route>
          <Route path="/swipepage" exact component={SwipePage}>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route path="/matchbox" exact component={MatchBox}>
            {/* Match box */}
          </Route>
          <Route path="/chatscreen" exact component={ChatScreen}>
            <Header />
            {/* Idividual chat screen */}
          </Route>

          <Route path="/matchbox/:person">
            <Header />
            <ChatScreen />
            {/* <ChatBox /> */}
            {/* workouts page */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
