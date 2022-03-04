import React from "react";
import "./Edit.css";

function Edit() {
  return (
    <div className="d-flex justify-content-center container">
        
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center p-3 py-5 text-center">
            <img
              className="rounded-circle"
              src="https://images.pexels.com/photos/4753928/pexels-photo-4753928.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              width="150"
              
            />
            <span className="font-weight-bold username ">ANNA</span>
            <span className="text-black-50">AnnaTheGreat@gmail.com</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">PROFILE SETTINGS</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="edit username"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Email</label>
                <input
                  type="text"
                  className="form-control"
                  value=""
                  placeholder="edit email"
                />
              </div>
              
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="edit city"
                  value=""
                />
              </div>
              
              
              
            </div>
            
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Edit;
