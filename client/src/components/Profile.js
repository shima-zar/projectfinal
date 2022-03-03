import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import Header from "./Header";

function Profile() {
  return (
    <div>
      <Header />
      <div className="profile">
        <div className="sandbox sandbox-correct-pronounciation">
          <em>WELCOME BACK ANNA</em>
        </div>
        <div className="d-flex justify-content-center container">
          <div className="card p-3 py-4">
            <div className="text-center">
              {" "}
              <img
                src="https://images.pexels.com/photos/4753928/pexels-photo-4753928.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                width="100"
                className="rounded-circle"
              />
              <h3 className="mt-2">Anna</h3>
              <div className="profileButtons">
                <nav>
                  <ul>
                    <li>
                      Edit profile
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </li>
                    <li>
                      Settings
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="blogContainer container ">
          <hr />

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="well blog">
                <a href="#">
                  <div className="row">
                    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                      <div className="image">
                        <Link
                          to={{ pathname: "https://fitnesstrainer.com/" }}
                          target="_blank"
                        >
                          <img
                            src="https://images.pexels.com/photos/39308/runners-silhouettes-athletes-fitness-39308.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                          />{" "}
                        </Link>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                      <div className="blog-details">
                        <p>Connect with professionals in your city</p>
                      </div>
                      <p>
                        First time looking for a Personal Trainer and not sure
                        where to start? Tell us about your project and we’ll
                        send you a list of Personal Trainers to review. There’s
                        no pressure to hire, so you can compare profiles, read
                        previous reviews and ask for more information before you
                        make your decision.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="well blog">
                <a href="#">
                  <div className="row">
                    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                      <div className="image">
                        <Link
                          to={{
                            pathname: "https://www.eatyourselfskinny.com/",
                          }}
                          target="_blank"
                        >
                          <img
                            src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                      <div className="blog-details">
                        <p>Diet and tips for a healthier life</p>
                      </div>
                      <p>
                        The key to a healthy diet is to eat the right amount of
                        calories for how active you are so you balance the
                        energy you consume with the energy you use. If you eat
                        or drink more than your body needs, you'll put on weight
                        because the energy you do not use is stored as fat. If
                        you eat and drink too little, you'll lose weight. You
                        should also eat a wide range of foods to make sure
                        you're getting a balanced diet and your body is
                        receiving all the nutrients it needs.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="well blog">
                <a href="#">
                  <div className="row">
                    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                      <div className="image">
                        <Link
                          to={{
                            pathname:
                              "https://www.okadoc.com/blog/healthy-lifestyle/the-best-places-to-train-outside-the-gym/",
                          }}
                          target="_blank"
                        >
                          <img
                            src="https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                      <div className="blog-details">
                        <p>Best places to workout outside the gym</p>
                      </div>
                      <p>
                        Whether you’re looking to lose weight, build muscle or
                        just trying to get in shape, the gym is the perfect
                        place to do it. Even though the gym is an excellent
                        destination for sport and fitness activities, is it the
                        only place to go for exercise? Certainly not. Changing
                        your environment, and tailoring your physical activities
                        to the destination of your training keeps things
                        interesting and can train your body and muscles in ways
                        that gym equipment won’t.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
