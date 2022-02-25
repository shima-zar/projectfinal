import React from "react";
import "./MatchBox.css";
import ChatBox from "./ChatBox";
import Header from "./Header";

function MatchBox() {
  return (
    <div className="matchBox">
      <Header />
      <ChatBox
        name="Rose"
        city="london"
        message="Tomorrow at 6am yoga at pearl beach?"
        profilePic="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      />
      <ChatBox
        name="joon"
        city="London"
        message="Hey budy! what's up?"
        profilePic="https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      />
      <ChatBox
        name="Mark"
        city="london"
        message="Shall we repeat our today session?"
        profilePic="https://images.pexels.com/photos/3809793/pexels-photo-3809793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <ChatBox
        name="Sandra"
        city="london"
        message="Hi I am Sandra personal trainer do you need one?"
        profilePic="https://images.pexels.com/photos/1772724/pexels-photo-1772724.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <ChatBox
        name="Rose"
        city="london"
        message="Tomorrow at 6am yoga at pearl beach?"
        profilePic="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      />
      <ChatBox
        name="joon"
        city="London"
        message="Hey budy! what's up?"
        profilePic="https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      />
      <ChatBox
        name="Mark"
        city="london"
        message="Shall we repeat our today session?"
        profilePic="https://images.pexels.com/photos/3809793/pexels-photo-3809793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <ChatBox
        name="Sandra"
        city="london"
        message="Hi I am Sandra personal trainer do you need one?"
        profilePic="https://images.pexels.com/photos/1772724/pexels-photo-1772724.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
    </div>
  );
}

export default MatchBox;
