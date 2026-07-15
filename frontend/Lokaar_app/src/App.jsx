import { useEffect } from "react";
import { socket } from "./socket";
import { useState } from "react";
import Login from "./login";

function App() {
  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      console.log("Socket ID:", socket.id);
    });
  }, []);
  const [message, setMessage] = useState("");
  let writeMsg = (e) => {
    setMessage(e.target.value);
  };
  let sendMsg = (e) => {
    socket.emit("mymessage", message);
  };

  return (
    <>
      <h1>Login</h1>
      <Login />
      {/* <h1>Welcome to Chats</h1>
      <input
        type="text"
        name="message"
        id="message"
        value={message}
        onChange={writeMsg}
      />
      <button onClick={sendMsg}>Send</button> */}
    </>
  );
}

export default App;
