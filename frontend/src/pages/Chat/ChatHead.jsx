import React from "react";

const ChatHead = ({ partner }) => {
  console.log(partner);
  return (
    <div className="h-10/10 border-b-1 border-gray-300 flex flex-row items-center mb-4 ">
      {partner ? (
        <>
          {" "}
          <p className="h-10 w-10 text-center bg-blue-700 rounded-full text-white pt-1 text-lg ml-8">
            {partner.username[0].toUpperCase()}
          </p>
          <h2 className="text-2xl font-medium ml-4">{partner.username}</h2>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-medium mx-auto">No Chat Selected</h2>
        </>
      )}
    </div>
  );
};

export default ChatHead;
