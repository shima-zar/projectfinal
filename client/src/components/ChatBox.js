import React from "react";
import "./ChatBox.css";
import Avatar from "@mui/material/Avatar";

function ChatBox({ name, message, profilePic, timestamp }) {
  return (
    <div className="chatBox">
      <Avatar className="chatBox--image" alt={name} src={profilePic}></Avatar>
      <h1>This is individual chat Box page</h1>
    </div>
  );
}

export default ChatBox;
