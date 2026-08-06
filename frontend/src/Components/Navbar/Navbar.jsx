import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import api from "../../API/api";

const Navbar = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    api.post("/logout");
    window.location.reload();
  };

  return (
    <div className="navbar position: sticky top-0 bg-white hidden md:block">
      {loading ? (
        <p>...loading</p>
      ) : (
        <>
          <div className="logo">
            <li>
              <img src={logo} alt="" className="logo ml-6" />
            </li>
          </div>
          <div className="services">
            <li>
              <Link to="/listings">Services</Link>
            </li>
            <li>
              <Link to="/working">How It Works</Link>
            </li>
            <li>
              <Link to="/new">Become A Provider</Link>
            </li>
          </div>

          {user ? (
            <div className="registers">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button className="blue-btn" onClick={handleLogout}>
                  Log Out
                </button>
              </li>
            </div>
          ) : (
            <div className="registers">
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/signup">
                  <button className="blue-btn">Sign Up</button>
                </Link>
              </li>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Navbar;
