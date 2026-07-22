import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import "../App.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <li>
          <img src={logo} alt="" className="logo"/>
        </li>
      </div>
      <div className="services">
        <li><a href="">Services</a></li>
        <li><a href="">How It Works</a></li>
        <li><a href="">Become A Provider</a></li>
      </div>
      <div className="registers">
        <li><a href="">Log In</a></li>
        <li>
          <a href="/login">
            <button>Sign Up</button>
          </a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
