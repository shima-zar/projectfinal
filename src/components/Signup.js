import React from "react";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import TransgenderIcon from "@mui/icons-material/Transgender";
import IconButton from "@mui/material/IconButton";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup">
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            checked
          />
          <label for="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="for-pwd" />
          <label for="tab-2" className="tab">
            Sign Up
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label for="user" className="label">
                  Username or Email
                </label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label className="label">Password</label>
                <input type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
              <div className="hr"></div>
            </div>
            <div className="for-pwd-htm">
              <div className="group">
                <label for="user" className="label">
                  Username or Email
                </label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label for="user" className="label">
                  City
                </label>
                <input id="city" type="text" className="input" />
              </div>
              <div className="group">
                <label for="user" className="label">
                  Photo
                </label>
                <input id="city" type="text" className="input" />
              </div>
              <div className="group">
                <label for="user" className="label">
                  Looking for
                </label>
                <div className="container">
                  <div className="row">
                    {/* <ul className="ds-btn"> */}
                    {/* <li> */}
                    {/* <a className="btn btn-lg "> */}
                    {/* <i className="glyphicon glyphicon-link pull-left"></i> */}
                    <IconButton>
                      <MaleIcon fontSize="large" color="primary" />
                    </IconButton>
                    {/* </a> */}
                    {/* </li> */}
                    {/* <li> */}
                    {/* <a className="btn btn-lg "> */}
                    {/* <i className="glyphicon glyphicon-link pull-left"></i> */}
                    <IconButton>
                      <FemaleIcon fontSize="large" color="primary" />
                    </IconButton>
                    {/* </a> */}
                    {/* </li> */}
                    {/* <li> */}
                    {/* <a className="btn btn-lg "> */}
                    {/* <i className="glyphicon glyphicon-link pull-left"></i> */}
                    <IconButton>
                      <TransgenderIcon fontSize="large" color="primary" />
                    </IconButton>
                    {/* </a> */}
                    {/* </li> */}
                    {/* </ul> */}
                  </div>
                </div>
              </div>

              <div className="group">
                <input type="submit" className="button" value="Next" />
              </div>
              <div className="hr"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
