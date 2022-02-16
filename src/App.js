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
            <SwipeButtons />
            {/* Buttons */}
          </Route>
          <Route path="/Signup">{/* Sign Up page */}</Route>
          <Route path="/WorkOuts">{/* workouts page */}</Route>
          <Route path="/SwipePage">{/* swipe Page */}</Route>
          <Route path="/MatchBox">{/* Match box */}</Route>
          <Route path="/ChatBox">{/* Idividual chat screen */}</Route>
          <Route path="/Profile">{/* personal profile*/}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
