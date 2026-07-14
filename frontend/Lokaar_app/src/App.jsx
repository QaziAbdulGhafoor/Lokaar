import { useEffect } from "react";
import { socket } from "./socket";

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });

    socket.on("reply", (msg) => {
      console.log(msg);
    });

    return () => {
      socket.off("reply");
    };
  }, []);

  function send() {
    socket.emit("message", "Hello Server");
  }

  return <button onClick={send}>Send</button>;
}

export default App;
