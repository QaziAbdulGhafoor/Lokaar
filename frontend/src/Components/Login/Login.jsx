import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Login.css";

const Login = () => {
  return (
    <form action="" className="form-box registration">
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
        />
      </div>
      <div className="inp">
        <label htmlFor="password">Password</label> <br />
        <input
          type="password"
          id="password"
          name="password"
          className="form-input"
          placeholder="Enter Your Password"
        />
      </div>

      <button type="submit" className="my-4 w-70">
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
