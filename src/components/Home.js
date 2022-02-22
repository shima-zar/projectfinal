import React from "react";
import "./Home.css";
import { Button } from "./Button";

function Home({onGetStarted}) {
  return (
    <div className="home">

      <video src="https://player.vimeo.com/external/455802460.sd.mp4?s=a3ac79d89597060793234c6303d855fdcc6a377f&profile_id=165&oauth2_token_id=57447761" autoPlay muted loop id="myVideo"></video>
      {/* <video src="https://player.vimeo.com/external/573349819.sd.mp4?s=6224ae8693c0f1f9a7d8cbcb4a3867f48f759239&profile_id=164&oauth2_token_id=57447761" autoPlay muted></video> */}
      <div className="content">
        
      <div className="btn">
        <Button onClick={() => onGetStarted(true)}>
          LET'S GET STARTED
        </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
