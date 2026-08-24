import React from "react";

const MessagesTile = ({ messages, me }) => {
  const meStyle = {
    backgroundColor: "blue",
    color: "white",
    alignSelf: "end",
  };
  console.log(messages);
  return (
    <div className="parent flex flex-col max-h-92  h-fit overflow-scroll">
      {messages.map((msg) => {
        return (
          <p
            key={msg._id}
            style={me === msg.sender ? meStyle : null}
            className="bg-gray-200 min-w-16 max-w-52 w-fit rounded px-4 py-2 my-1 "
          >
            {msg.text}
            {/* <br />
            <span className="text-sm text-gray-400 mx-auto">
              {new Date(msg.createdAt).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
                //year: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })}
            </span> */}
          </p>
        );
      })}
    </div>
  );
};

export default MessagesTile;
