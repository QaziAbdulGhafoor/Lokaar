import React, { useState } from "react";

const NewMessage = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.log(message);
  };
  return (
    <div>
      <div className="w-5/6 flex flex-row items-center h-16 mx-auto card rounded">
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
