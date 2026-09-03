import React, { useState, useContext, useEffect } from "react";
import AllChats from "./AllChats";
import MessagesTile from "./MessagesTile";
import { AuthContext } from "../../Context/AuthContext";
import { useParams } from "react-router-dom";
import api from "../../API/api";
//import MessageForm from "../Listings/MessageForm";

const ChatPage = () => {
  const { id } = useParams();
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatPartner, setChatPartner] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchChat = async () => {
      const res = await api.get(`/conversations/${id}`);
      setMessages(res.data.messages);
      setChatPartner(res.data.partner);
      console.log(res);
    };
    fetchChat();
  }, [id]);
  return (
    <div className="flex flex-row justify-between w-screen h-[calc(vh-100-4rem)]">
      <div className="md:block hidden md:w-5/20">
        <AllChats setMessages={setMessages} setChatPartner={setChatPartner} />
      </div>
      <div className="md:w-15/20 w-screen">
        {" "}
        <MessagesTile
          messages={messages}
          setMessages={setMessages}
          me={user.id}
          partner={chatPartner}
        />
      </div>
    </div>
  );
};

export default ChatPage;
