import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
// import WineBarIcon from "@mui/icons-material/WineBar";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    //BEM
    <div className="header">
      {/* material ui perofile icon */}
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      {/* instead of icon i used an image */}
      {/* icon button makes the icons fancy click on button create a circle shape around it */}
      <IconButton>
        <img
          className="header__logo1"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Running_icon_-_Noun_Project_22889.svg/200px-Running_icon_-_Noun_Project_22889.svg.png?20130913231835"
          alt="runner"
        />
        <img
          className="header__logo2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Running_icon_-_Noun_Project_22889.svg/200px-Running_icon_-_Noun_Project_22889.svg.png?20130913231835"
          alt="runner"
        />
      </IconButton>
      {/* wine icon */}
      {/* <WineBarIcon /> */}
      {/* material ui import chat icon */}
      {/* fontSize changes the size of icon and doesn't change the text size */}
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
