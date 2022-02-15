import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
        <Route path="/">
            <TinderCards />
            {/* home page */}
            {/* ppl Cards */}
            <SwipeButtons/>
            {/* Buttons */}
          </Route>
          <Route path="/signup">
            <h1>Sign Up</h1>
            {/* Sign Up page */}
          </Route>
          <Route path="/workouts">
            <h1>Work Outs</h1>
            {/* work outs page */}
          </Route>
          <Route path="/matchbox">
            <h1>Match Box</h1>
            {/* Match box */}
          </Route>
          <Route path="/chatbox">
            <h1>Chat Box</h1>
            {/* Chat box */}
          </Route>
          
          {/* Idividual chat screen */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
