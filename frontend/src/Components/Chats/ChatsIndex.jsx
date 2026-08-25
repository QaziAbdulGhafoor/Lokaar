import React, { useState, useContext } from "react";
import AllChats from "./AllChats";
import MessagesTile from "../Listings/MessagesTile";
import { AuthContext } from "../../Context/AuthContext";
import MessageForm from "../Listings/MessageForm";

const ChatsIndex = () => {
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatPartner, setChatPartner] = useState("");
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-row justify-between ">
      <AllChats setMessages={setMessages} setChatPartner={setChatPartner} />
      <MessagesTile messages={messages} me={user.id} partner={chatPartner} />
    </div>
  );
};

export default ChatsIndex;
