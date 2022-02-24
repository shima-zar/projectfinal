import React from "react";
import "./SwipePage.css";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function SwipePage() {
  return (
    <div className="swipePage">
      <h1>This is Swipe Page</h1>
      <TinderCards />
      {/* home page */}
      <SwipeButtons />
    </div>
  );
}

export default SwipePage;
