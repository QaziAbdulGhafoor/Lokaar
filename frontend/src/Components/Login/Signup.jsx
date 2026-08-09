import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Login.css";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
const Signup = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const [formData, setFormdata] = useState({
    username: "",
    password: "",
    email: "",
    location: "",
    category: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setFormdata((prev) => {
      return { ...prev, [property]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = formData;
    console.log(data);
    const register = async (data) => {
      try {
        const response = await axios.post("http://localhost:3000/signup", data);
        setUser(response.data.user);
        navigate("/listings");
      } catch (err) {
        console.log(err);
      }
    };

    register(data).then(() => {
      navigate("/listings");
    });
  };

  return (
    <form action="" className="form-box registration " onSubmit={handleSubmit}>
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
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="inp">
        <label htmlFor="password">Password</label> <br />
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          className="form-input "
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        <span
          className="eye"
          onClick={() => {
            setShowPassword((prev) => {
              return !prev;
            });
          }}
        >
          <i className="fa-regular fa-eye"></i>
        </span>
      </div>
      <div className="inp">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="inp">
        <label htmlFor="location">Location</label>
        <br />
        <input
          type="text"
          id="location"
          name="location"
          className="form-input"
          placeholder="city,state,country"
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <label htmlFor="" className="inp self-start ml-12">
        Select Your Category
      </label>
      <div className="inp" id="category">
        <div className="category">
          <label className="option">
            <input
              type="radio"
              name="category"
              value="customer"
              checked={formData.category === "customer"}
              onChange={handleChange}
            />
            <span>
              <i className="fa-solid fa-user"></i>
              Customer
            </span>
          </label>
        </div>
        <div className="category">
          <label className="option">
            <input
              type="radio"
              name="category"
              value="provider"
              checked={formData.category === "provider"}
              onChange={handleChange}
            />
            <span>
              <i className="fa-solid fa-briefcase"></i>
              Provider
            </span>
          </label>
        </div>
      </div>
      <button type="submit" className="my-4 w-70 blue-btn">
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
