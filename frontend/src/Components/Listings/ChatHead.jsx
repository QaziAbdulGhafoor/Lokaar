import React from "react";

const ChatHead = ({ partner }) => {
  console.log(partner);
  return (
    <div className="h-16 border-b-1 border-gray-300 flex flex-row items-center mb-4 ">
      {/* <p className="h-10 w-10 text-center bg-blue-700 rounded-full text-white pt-1 text-lg">
        {other.username[0].toUpperCase()}
      </p> */}
      <h2 className="text-xl font-medium ml-8">{partner.username}</h2>
    </div>
  );
};

export default ChatHead;
