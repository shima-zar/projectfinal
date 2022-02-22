import React, { useState, useEffect } from "react";
import "./Signup.css";

function Signup() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
    setImageURLs(newImageURLs);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  return (
    <div className="signup">
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="for-pwd" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Username or Email
                </label>
                <input id="username" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
              <div className="hr"></div>
            </div>
            <div className="for-pwd-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Username or Email
                </label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="city" className="label">
                  City
                </label>
                <input id="city" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="age" className="label">
                  Age
                </label>
                <input id="age" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="photo" className="label">
                  Photo
                </label>
                <div className="row m-5 pb-5">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={onImageChange}
                  />
                  {imageURLs.map((imageSrc) => (
                    <img width="150" height="120" src={imageSrc} />
                  ))}
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
