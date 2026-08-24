import React from "react";

const ChatHead = ({ other }) => {
  console.log(other);
  return (
    <div className="h-20 card flex flex-row items-center mb-4">
      {/* <p className="h-10 w-10 text-center bg-blue-700 rounded-full text-white pt-1 text-lg">
        {other.username[0].toUpperCase()}
      </p> */}
      <h2 className="text-xl ml-8">{other.username}</h2>
    </div>
  );
};

export default ChatHead;
