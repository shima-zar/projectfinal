import React from "react";
import "./WorkOuts.css";
import { Link } from "react-router-dom";

function WorkOuts() {
  return (
    <div className="container">
      <div className="sandbox sandbox-correct-pronounciation">
        <em>Choose your workout</em>
      </div>

      <div className="row">
        <div className="col-sm-4 ">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/4753893/pexels-photo-4753893.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className="img-thumbnail"
            />

            <p className="carousel-caption">
              <input type="checkbox" id="box-1" />
              <label htmlFor="box-1">BOXING</label>
            </p>
          </div>
          {/* BOXING */}
        </div>
        <div className="col-sm-4 ">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/6740756/pexels-photo-6740756.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className="img-thumbnail"
            />
            <p className="carousel-caption">
              <input type="checkbox" id="box-2" />
              <label htmlFor="box-2">PILATES</label>
            </p>
          </div>
          {/* PILATES */}
        </div>
        <div className="col-sm-4 ">
          <div className="item">
            <img
              src="https://media.istockphoto.com/photos/giving-motivation-young-and-strong-man-in-sportswear-doing-push-ups-picture-id1162483560?k=20&m=1162483560&s=612x612&w=0&h=IpqKAWEzIrUC6_z3EiUHFoLOSysPl85OvM-Rwq1F9Pw="
              className="img-thumbnail"
            />
            <p className="carousel-caption">
              <input type="checkbox" id="box-3" />
              <label htmlFor="box-3">TRX</label>
            </p>
          </div>
          {/* TRX */}
        </div>
        <div className="col-sm-4 ">
          <div className="item">
            <img
              src="https://media.istockphoto.com/photos/gym-fitness-workout-man-ready-to-exercise-with-kettle-bell-picture-id503416862?k=20&m=503416862&s=612x612&w=0&h=eV-187gmyIze3Xc_Ty2xgEZdsG_y-FjcQR9-n7Y3J1k="
              className="img-thumbnail"
            />
            <p className="carousel-caption">
              <input type="checkbox" id="box-4" />
              <label htmlFor="box-4">CROSSFIT</label>
            </p>
          </div>
          {/* CROSSFIT */}
        </div>
        <div className="col-sm-4 ">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/5851033/pexels-photo-5851033.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className="img-thumbnail"
            />
            <p className="carousel-caption">
              <input type="checkbox" id="box-5" />
              <label htmlFor="box-5">CYCLING</label>
            </p>
          </div>
          {/* CYCLING */}
        </div>
        <div className="col-sm-4 ">
          <div className="item">
            <img
              src="https://media.istockphoto.com/photos/woman-exercise-workout-in-gym-fitness-breaking-relax-holding-apple-picture-id871070868?k=20&m=871070868&s=612x612&w=0&h=Gh7o1IhxEUldQIKv7nATlVm2rb3JmkKNkYz33_54A9w="
              className="img-thumbnail"
            />
            <p className="carousel-caption">
              <input type="checkbox" id="box-6" />
              <label htmlFor="box-6">AEROBIC</label>
            </p>
          </div>
          {/* AEROBIC */}
        </div>
        <div className="col-sm-4">
          <div className="item">
            <img
              src="https://media.istockphoto.com/photos/group-of-hikers-walks-in-mountains-at-sunset-picture-id1189969126?k=20&m=1189969126&s=612x612&w=0&h=6JPjSS9UORT-DAnIoa0mopA9lwFxX8tX8HQrJdb_i70="
              className="img-thumbnail"
            />
            <p className="carousel-caption">
              <input type="checkbox" id="box-7" />
              <label htmlFor="box-7">HIKING</label>
            </p>
          </div>
          {/* HIKING */}
        </div>
        <div className="col-sm-4 ">
          <div className="item">
            <img
              src="https://media.istockphoto.com/photos/beautiful-attractive-asian-woman-practice-yoga-lotus-pose-on-the-pool-picture-id1074959548?k=20&m=1074959548&s=612x612&w=0&h=waZfrdRLzqJmHPyk-Yaydb7dE3EMqm2eZvEcRTBGYrE="
              className="img-thumbnail"
            />
            <p className="carousel-caption">
              <input type="checkbox" id="box-8" />
              <label htmlFor="box-8">YOGA</label>
            </p>
          </div>
          {/* YOGA */}
        </div>
        <div className="col-sm-4 ">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/39308/runners-silhouettes-athletes-fitness-39308.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className="img-thumbnail"
            />
            <p className="carousel-caption">
              <input type="checkbox" id="box-9" />
              <label htmlFor="box-9">RUNNING</label>
            </p>
          </div>
          {/* RUNNING */}
        </div>
      </div>
      <div className="box-3">
        <Link to="/swipepage">
          <div className="btn btn-three">
            <span>LET'S GO</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default WorkOuts;
