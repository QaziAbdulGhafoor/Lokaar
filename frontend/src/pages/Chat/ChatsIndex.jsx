import React, { useState, useContext } from "react";
import AllChats from "./AllChats";
import MessagesTile from "./MessagesTile";
import { AuthContext } from "../../Context/AuthContext";
//import MessageForm from "../Listings/MessageForm";

const ChatsIndex = () => {
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatPartner, setChatPartner] = useState("");
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-row justify-between h-[calc(100vh-4rem)]">
      <div className="md:w-5/20 w-screen">
        <AllChats setMessages={setMessages} setChatPartner={setChatPartner} />
      </div>

      <div className="md:block hidden md:w-15/20">
        <h2 className="text-3xl font-medium mt-40 text-center">
          Kindly Select A Chat
        </h2>
      </div>
      {/* <MessagesTile
        messages={messages}
        setMessages={setMessages}
        me={user.id}
        partner={chatPartner}
      /> */}
    </div>
  );
};

export default ChatsIndex;
