import React, { useEffect, useState, useContext } from "react";
import api from "../../API/api";
import ChatHead from "../Listings/ChatHead";
import ChatLink from "./ChatLink";
import { AuthContext } from "../../Context/AuthContext";
import Loader from "../Listings/Loader";

const AllChats = ({ setMessages, setChatPartner }) => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await api.get("/conversations");
        //console.log(res.data.conversations);
        setChats(res.data.conversations);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className=" w-5/20 border-r-1 border-gray-300">
      <p className="text-3xl font-semibold text-center my-4">All chats</p>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {chats.length > 0 ? (
            <div className="flex flex-col gap-2 overflow-scroll">
              {chats.map((chat) => {
                return (
                  <ChatLink
                    partner={chat.participants.find(
                      (pt) => pt.username !== user.username,
                    )}
                    conversation={chat}
                    setMessages={setMessages}
                    setChatPartner={setChatPartner}
                    me={user.id}
                  />
                );
              })}
            </div>
          ) : (
            <div className="card w-32 mx-auto px-12">
              No Chats Kindly Chat To Someone
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AllChats;
