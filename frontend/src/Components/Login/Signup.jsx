import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Login.css";
const Signup = () => {
  return (
    <form action="" className="form-box registration ">
      <img src={logo} alt="" className="h-12" />
      <div className="welcome mb-4">
        <h2 className="text-3xl font-semibold">Welcome!</h2>
        <p className="text-gray-500 text-center">Create your account</p>
      </div>
      <div className="inp">
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          className="form-input"
          placeholder="Enter Username"
        />
      </div>
      <div className="inp">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          id="email"
          name="email"
          className="form-input"
          placeholder="Enter Email"
        />
      </div>
      <div className="inp">
        <label htmlFor="password">Password</label> <br />
        <input
          type="password"
          id="password"
          name="password"
          className="form-input"
          placeholder="Enter Password"
        />
      </div>
      <div className="inp">
        <label htmlFor="username">Location</label>
        <br />
        <input
          type="text"
          id="location"
          name="location"
          className="form-input"
          placeholder="city,state,country"
        />
      </div>
      <label htmlFor="" className="inp self-start ml-12">
        Select Your Category
      </label>
      <div className="inp self-start flex flex-row gap-4 ml-12">
        <label className="option">
          <input type="radio" name="category" value="customer" />
          <span>
            <i className="fa-solid fa-user"></i>
            Customer
          </span>
        </label>

        <label className="option">
          <input type="radio" name="category" value="provider" />
          <span>
            <i className="fa-solid fa-briefcase"></i>
            Provider
          </span>
        </label>
      </div>
      <button type="submit" className="my-4 w-70">
        Sign Up
      </button>
      <p className="mb-8">
        Already have account?
        <Link to="/" className="text-blue-500">
          Log In
        </Link>
      </p>
    </form>
  );
};

export default Signup;
