import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import image from "../images/typography2.svg";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import { Link } from "react-router-dom";

function Header({ backButton }) {
  return (
    <div className="header">
      {backButton ? (
        <IconButton>
          <ArrowBackIosNewTwoToneIcon
            fontSize="large"
            className="header__icon"
          ></ArrowBackIosNewTwoToneIcon>
        </IconButton>
      ) : (
        <Link to="/signup">
          <IconButton>
            <PersonIcon className="icon" sx={{ fontSize: 50 }} />
          </IconButton>
        </Link>
      )}
      <Link to="swipepage">
        <img src={image} className="logo" alt="logo"></img>
      </Link>
      <Link to="/matchbox">
        <IconButton>
          <ForumIcon className="icon" sx={{ fontSize: 50 }} />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
