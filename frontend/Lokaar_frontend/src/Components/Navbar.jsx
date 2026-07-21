import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <li>
          <img src={logo} alt="" />
        </li>
      </div>
      <div className="services">
        <li>Services</li>
        <li>How It Works</li>
        <li>Become A Provider</li>
      </div>
      <div className="registers">
        <li>Log In</li>
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
