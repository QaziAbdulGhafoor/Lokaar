import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useParams } from "react-router-dom";
import { socket } from "../../Socket";
import MessagesTile from "./MessagesTile";
import api from "../../API/api";

const MessageForm = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState("");
  const [messages, setMessages] = useState([]);
  const [otherUser, setOtherUser] = useState("");
  //const [currUser, setCurrUser] = useState("");
  const { user } = useContext(AuthContext);

  console.log(messages);

  const currUser = user?.id;
  const roomId =
    currUser && otherUser ? [otherUser, currUser].sort().join("_") : "";

  useEffect(() => {
    const getListing = async () => {
      const res = await api.get(`/listings/${id}`);
      setOtherUser(res.data.listing.owner._id);
    };

    getListing();
  }, [id]);

  useEffect(() => {
    if (!conversation) return;
    const getMsgs = async () => {
      const res = await api.get(`/messages/${conversation}`);
      setMessages(res.data.messages);
    };

    getMsgs();
  }, [conversation]);

  //Join room
  useEffect(() => {
    if (!roomId) return;

    socket.emit("join_room", { roomId, currUser, otherUser });
  }, [roomId]);

  useEffect(() => {
    const handleMessage = (data) => {
      console.log("New message:", data);
    };

    socket.on("conversation", (data) => {
      setConversation(data.conversationId);
    });

    socket.on("recieve_message", handleMessage);

    return () => {
      socket.off("receive_message", handleMessage);
    };
  }, []);

  const sendMessage = () => {
    socket.emit("send_message", {
      roomId,
      senderId: currUser,
      message,
      recieverId: otherUser,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="message"
        className="border-2 border-gray-400 rounded"
        id=""
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <br />
      <button className="blue-btn" onClick={sendMessage}>
        Send
      </button>
      {messages.length > 0 ? (
        <MessagesTile messages={messages} me={currUser} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default MessageForm;
