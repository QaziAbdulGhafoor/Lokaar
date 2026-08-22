import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useParams } from "react-router-dom";
import { socket } from "../../Socket";
import api from "../../API/api";

const MessageForm = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [otherUser, setOtherUser] = useState("");
  //const [currUser, setCurrUser] = useState("");
  const { user } = useContext(AuthContext);

  const currUser = user?.id;
  const roomId =
    currUser && otherUser ? [otherUser, currUser].sort().join("_") : "";

  console.log(roomId);

  useEffect(() => {
    const getListing = async () => {
      const res = await api.get(`/listings/${id}`);
      setOtherUser(res.data.listing.owner._id);
    };

    getListing();
  }, [id]);

  //Join room
  useEffect(() => {
    if (!roomId) return;

    socket.emit("join_room", roomId);
    console.log("joining room", roomId);
  }, [roomId]);

  useEffect(() => {
    const handleMessage = (data) => {
      console.log("New message:", data);
    };

    socket.on("recieve_message", handleMessage);

    return () => {
      socket.off("receive_message", handleMessage);
    };
  }, []);
  //console.log("curr:", currUser, "other:", otherUser);

  const sendMessage = () => {
    socket.emit("send_message", { roomId, senderId: currUser, message });
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
    </div>
  );
};

export default MessageForm;
