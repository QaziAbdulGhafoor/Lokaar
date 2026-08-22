import React from "react";

const MessagesTile = ({ messages, me }) => {
  const meStyle = { backgroundColor: "blue", color: "white" };
  console.log(messages);
  return (
    <div className="parent">
      {messages.map((msg) => {
        return <p style={me === msg.sender ? meStyle : null}>{msg.text}</p>;
      })}
    </div>
  );
};

export default MessagesTile;
