import React from "react";
import api from "../../API/api";

const ChatLink = ({ partner, conversation, setMessages, setChatPartner }) => {
  const fetchMsg = async () => {
    const res = await api.get(`/conversations/${conversation._id}`);
    setMessages(res.data.messages);
    setChatPartner(partner);
  };

  return (
    <div
      className=" flex flex-row items-center border-b-1 border-gray-300 py-2 pl-4"
      onClick={fetchMsg}
    >
      <p className="bg-blue-700 h-8 w-8 text-white text-center rounded-full pt-1">
        {partner.username[0]}
      </p>
      <div className="ml-4">
        <h2 className="text-xl font-semibold">{partner.username}</h2>
        <p className="text-sm mt-1">
          Last Chat :
          {new Date(conversation.updatedAt).toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            //year: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};

export default ChatLink;
