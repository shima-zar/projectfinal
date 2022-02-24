import React from "react";
import "./MatchBox.css";
import ChatBox from "./ChatBox";

function MatchBox() {
  return (
    <div className="matchBox">
      <ChatBox
        Name="Rose"
        message="Tomorrow at 6am yoga at pearl beach?"
        ProfilePic="..."
      />
      <h1> This is Match Box page </h1>
    </div>
  );
}

export default MatchBox;
