import React from "react";
import "./SwipePage.css";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Header from "./Header";
import "./Header.css";
import image from "../images/typography1.png";

function SwipePage() {
  return (
    <div className="swipePage">
      <h1>This is Swipe Page</h1>
      <Header />
      <TinderCards />
      {/* home page */}
      <SwipeButtons />

      <img src={image} className="logo" alt="logo"></img>
    </div>
  );
}

export default SwipePage;
