import React, { useState, useEffect, useContext } from "react";
import { socket } from "../../Socket";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  console.log(message);

  const sendMessage = () => {
    socket.emit("send_message", { message });
  };
  return (
    <div>
      <input
        type="text"
        name="message"
        className="border-2 border-gray-400 rounded"
        id=""
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <br />
      <button className="blue-btn" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default MessageForm;
