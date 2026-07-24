import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Signup = () => {
  return (
    <form action="" className="form-box registration">
      <img src={logo} alt="" className="h-12 " />
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
        <label htmlFor="username">Email</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          className="form-input"
          placeholder="Enter Email"
        />
      </div>

      <div className="inp">
        <label htmlFor="username">Location</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          className="form-input"
          placeholder="city,state,country"
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
