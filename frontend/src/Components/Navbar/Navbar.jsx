import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import "../../App.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const currUser = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="logo">
        <li>
          <img src={logo} alt="" className="logo ml-6" />
        </li>
      </div>
      <div className="services">
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">How It Works</a>
        </li>
        <li>
          <Link to="/new">Become A Provider</Link>
        </li>
      </div>
      {currUser.user ? (
        <div className="registers">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button className="blue-btn">Log Out</button>
          </li>
        </div>
      ) : (
        <div className="registers">
          <li>
            <Link to="/">Log In</Link>
          </li>
          <li>
            <Link to="/signup">
              <button className="blue-btn">Sign Up</button>
            </Link>
          </li>
        </div>
      )}
    </div>
  );
};

export default Navbar;
