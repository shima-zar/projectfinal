import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export const Button = () => {
    return (
        <div className="container">
    <Link to="/signup" className="animated-word">
        LET'S GET STARTED
        
        </Link>
        </div>
    )
};




