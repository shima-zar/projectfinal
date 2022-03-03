import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import image from "../images/typography2.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      {/* material ui perofile icon */}
      <Link to="/profile">
        <IconButton>
          <PersonIcon className="icon" fontSize="large" />
        </IconButton>
      </Link>

      {/* icon button makes the icons fancy click on button create a circle shape around it */}
      <Link to="/swipepage">
        <img src={image} className="logo" alt="logo"></img>
      </Link>
      <Link to="/matchbox">
        <IconButton>
          <ForumIcon className="icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
