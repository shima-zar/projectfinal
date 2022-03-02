import React from "react";
import "./ChatBox.css";
import Avatar from "@mui/material/Avatar";

// import Header from "./Header";

function ChatBox({ name, city, message, profilePic }) {
  return (
    <div className="chat__box">
      <Avatar className="chat__image" src={profilePic} />
      <div className="chat__details">
        <h1>{name}</h1>
        <p>{message}</p>
        <h2>{city}</h2>
      </div>
    </div>
  );
}

export default ChatBox;
