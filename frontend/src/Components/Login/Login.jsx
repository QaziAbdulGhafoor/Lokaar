import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import logo from "../../assets/logo.png";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import api from "../../API/api";
import { AuthContext } from "../../Context/AuthContext";
import { AlertContext } from "../../Context/AlertContext";

const Login = () => {
  const { user, setUser } = useContext(AuthContext);
  const { alert, setAlert } = useContext(AlertContext);
  const [formData, setFormdata] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

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

    const LogMeIn = async (data) => {
      try {
        const response = await api.post("/login", data);
        setUser(response.data.user);
        //localStorage.setItem("user", response.data.user.id);
        navigate("/listings");
        setAlert({ type: "green", message: "Login Success" });
      } catch (err) {
        console.log(err);
      }
    };

    LogMeIn(data);
  };

  return (
    <form action="" onSubmit={handleSubmit} className="form-box registration">
      <img src={logo} alt="" className="h-12 " />
      <div className="welcome mb-4">
        <h2 className="text-3xl font-semibold">Welcome Back</h2>
        <p className="text-gray-500 text-center">Sign in to your account</p>
      </div>
      <div className="inp">
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          className="form-input"
          placeholder="Enter Your Username"
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
          className="form-input"
          placeholder="Enter Your Password"
          value={formData.password}
          onChange={handleChange}
        />
        <span
          className="eye"
          id="eye"
          onClick={() => {
            setShowPassword((prev) => {
              return !prev;
            });
          }}
        >
          <i className="fa-regular fa-eye"></i>
        </span>
      </div>

      <button type="submit" className="my-4 w-70 blue-btn">
        Sign In
      </button>
      <p className="mb-8">
        Don't have account?{" "}
        <Link to="/signup" className="text-blue-500">
          Create One
        </Link>
      </p>
    </form>
  );
};

export default Login;
