import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Signup.css";

function Signup() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [userSignUp, setUserSignUp] = useState({
    username: "",
    age: "",
    photo: "",
    city: "",
    password: "",
    email: "",
  });
  const handleChange = (e) => {
    setUserSignUp((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

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
    <div className="row">
      <div className="col-md-6 mx-auto p-0">
        <div className="card">
          <div className="login-box">
            <div className="login-snip">
              {" "}
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                checked
              />
              <label htmlFor="tab-1" className="tab">
                Login
              </label>{" "}
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <label htmlFor="tab-2" className="tab">
                Sign Up
              </label>
              <div className="login-space">
                <div className="login">
                  <div className="group">
                    {" "}
                    <label htmlFor="username" className="label">
                      Username
                    </label>{" "}
                    <input
                      id="username"
                      type="text"
                      className="input"
                      placeholder="Enter your username"
                    />{" "}
                  </div>

                  <div className="group">
                    {" "}
                    <label htmlFor="pass" className="label">
                      Password
                    </label>{" "}
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Enter your password"
                    />{" "}
                  </div>

                  <div className="group">
                    {" "}
                    <input
                      type="submit"
                      className="button"
                      value="Sign In"
                    />{" "}
                  </div>
                  <div className="hr"></div>
                </div>
                <div className="sign-up-form">
                  <div className="group">
                    {" "}
                    <label htmlFor="user" className="label">
                      Username
                    </label>{" "}
                    <input
                      name="user"
                      type="text"
                      className="input"
                      placeholder="Create your Username"
                      onChange={handleChange}
                    />{" "}
                  </div>
                  <div className="group">
                    {" "}
                    <label htmlFor="age" className="label">
                      Age
                    </label>{" "}
                    <input
                      name="age"
                      type="text"
                      className="input"
                      placeholder="Enter your age"
                      onChange={handleChange}
                    />{" "}
                  </div>
                  <div className="group">
                    <label htmlFor="photo" className="label">
                      Photo
                    </label>
                    <div className="row m-5 pb-5">
                      <input
                        name="photo"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={onImageChange}
                        onChange={handleChange}
                      />
                      {imageURLs.map((imageSrc) => (
                        <img width="150" height="120" src={imageSrc} />
                      ))}
                    </div>
                  </div>
                  <div className="group">
                    {" "}
                    <label htmlFor="city" className="label">
                      City
                    </label>{" "}
                    <input
                      name="city"
                      type="text"
                      className="input"
                      placeholder="Enter your city"
                      onChange={handleChange}
                    />{" "}
                  </div>
                  <div className="group">
                    {" "}
                    <label htmlFor="email" className="label">
                      Email Address
                    </label>{" "}
                    <input
                      name="email"
                      type="text"
                      className="input"
                      placeholder="Enter your email address"
                      onChange={handleChange}
                    />{" "}
                  </div>

                  <div className="group">
                    {" "}
                    <label htmlFor="pass2" className="label">
                      Password
                    </label>{" "}
                    <input
                      name="password"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Create your password"
                      onChange={handleChange}
                    />{" "}
                  </div>

                  <div className="group">
                    <Link to="/workouts" className="button">
                      Next
                    </Link>
                  </div>
                  <div className="hr"></div>
                  <div className="foot">
                    {" "}
                    <label htmlFor="tab-1">Already Member?</label>{" "}
                  </div>
                  <div className="hr"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
