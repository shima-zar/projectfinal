import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import image from "../images/typography1.png";

function Header() {
  return (
    //BEM
    <div className="header">
      {/* material ui perofile icon */}
      <IconButton>
        <PersonIcon className="icon" fontSize="large" />
      </IconButton>

      {/* icon button makes the icons fancy click on button create a circle shape around it */}
      <img src={image} className="logo" alt="logo"></img>
      <IconButton>
        <ForumIcon className="icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;