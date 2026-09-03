import React, { useState, useEffect } from "react";
import { socket } from "../../services/Socket";

const NewMessage = ({ me, other, setMessages }) => {
  const [message, setMessage] = useState("");
  const roomId = me && other ? [me, other].sort().join("_") : "";
  const sendMessage = () => {
    socket.emit("send_message", {
      roomId,
      senderId: me,
      message,
      recieverId: other,
    });
  };

  const handleMessage = (data) => {
    setMessages((prev) => {
      return [...prev, data.newMsg];
    });
    console.log(data);
  };

  useEffect(() => {
    socket.on("recieve_message", handleMessage);
  }, []);

  return (
    <div className="h-10/10">
      <div className="w-5/6 flex flex-row items-center mx-auto card rounded">
        <input
          type="text"
          name="message"
          placeholder="Enter Your Message"
          className="border-2 border-gray-400 rounded h-8 w-8/9 pl-2"
          id=""
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          className="bg-blue-700 h-10 w-10 rounded-full ml-2"
          onClick={sendMessage}
        >
          <span className="material-symbols-outlined mt-1 text-white">
            send
          </span>
        </button>
      </div>
    </div>
  );
};

export default NewMessage;
