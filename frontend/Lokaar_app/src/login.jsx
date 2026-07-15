import { useState } from "react";

function Login() {
  const [input, changeInput] = useState({
    username: "",
    password: "",
  });

  function handleInput(e) {
    let key = e.target.name;
    changeInput((prev) => {
      return {
        ...prev,
        [key]: e.target.value,
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(input),
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id=""
          placeholder="Username"
          value={input.username}
          onChange={handleInput}
        />
        <input
          type="text"
          name="password"
          id=""
          placeholder="Password"
          value={input.password}
          onChange={handleInput}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
