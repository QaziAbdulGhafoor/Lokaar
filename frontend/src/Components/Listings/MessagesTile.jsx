import React from "react";

const MessagesTile = ({ messages, me }) => {
  const meStyle = {
    backgroundColor: "blue",
    color: "white",
    alignSelf: "end",
  };
  console.log(messages);
  return (
    <div className="parent flex flex-col">
      {messages.map((msg) => {
        return (
          <p
            style={me === msg.sender ? meStyle : null}
            className="bg-gray-200 min-w-16 max-w-40 w-fit rounded px-4 py-2 my-1"
          >
            {msg.text}
            <p className="text-sm">
              {new Date(msg.createdAt).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
                //year: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })}
            </p>
          </p>
        );
      })}
    </div>
  );
};

export default MessagesTile;
