import React from "react";
import { useState, useEffect } from "react";
import "./ChatScreen.css";
import Avatar from "@mui/material/Avatar";
import SendTwoToneIcon from "@mui/icons-material/SendTwoTone";
import IconButton from "@mui/material/IconButton";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Karla",
      image:
        "https://media-exp1.licdn.com/dms/image/D4E03AQE9twzoYDDBnw/profile-displayphoto-shrink_200_200/0/1640109997808?e=1648080000&v=beta&t=8KDfye7fV4KAnOhb-CPNaJ1Ek2kS9L6T3Mh2hFb32x8",
      message: "Tomorrow at 6am yoga at ABfitness gym?",
    },
    {
      name: "Karla",
      image:
        "https://media-exp1.licdn.com/dms/image/D4E03AQE9twzoYDDBnw/profile-displayphoto-shrink_200_200/0/1640109997808?e=1648080000&v=beta&t=8KDfye7fV4KAnOhb-CPNaJ1Ek2kS9L6T3Mh2hFb32x8",
      message: "or at 8am?",
    },
    {
      message: "oh no i'm not an early bird",
    },
    {
      message: "How about 9pm?",
    },
    {
      message: "...",
    },
  ]);
  return (
    <div className="ChatScreen">
      <h4>You are about to Gym Mate with Karla</h4>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              key={message.name}
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textuser">{message.message}</p>
          </div>
        )
      )}
      <div className="chatScreen__input">
        <form>
          <input
            placeholder="Type a message ..."
            type="text"
            className="chatScreen__inputform"
          />
          <IconButton className="chatbutton">
            <SendTwoToneIcon sx={{ fontSize: 40 }}></SendTwoToneIcon>
          </IconButton>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
