import React from "react";
import "./SwipeButtons.css";
// import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
// import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
// import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";
import ChatBubbleOutlineTwoToneIcon from "@mui/icons-material/ChatBubbleOutlineTwoTone";
import { Link } from "react-router-dom";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__left">
        <CloseIcon sx={{ fontSize: 50 }} />
      </IconButton>
      <Link to="/chatbox">
        <IconButton>
          <ChatBubbleOutlineTwoToneIcon
            className="swipeButtons__left"
            sx={{ fontSize: 50 }}
          />
        </IconButton>
      </Link>
      {/* <IconButton className="swipeButtons__star">
        <StarRateIcon fontSize="large" />
      </IconButton> */}

      <IconButton className="swipeButtons__right">
        <FavoriteBorderTwoToneIcon sx={{ fontSize: 50 }} />
      </IconButton>
      {/* <IconButton className="swipeButtons__lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton> */}
    </div>
  );
}

export default SwipeButtons;
