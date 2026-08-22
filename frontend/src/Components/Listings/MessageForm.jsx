import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useParams } from "react-router-dom";
import { socket } from "../../Socket";
import api from "../../API/api";

const MessageForm = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [otherUser, setOtherUser] = useState("");
  const [currUser, setCurrUser] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setCurrUser(user.id);
    const getListing = async () => {
      const res = await api.get(`/listings/${id}`);
      setOtherUser(res.data.listing.owner._id);
    };

    getListing();

    const roomId = [otherUser, currUser].sort().join("_");
  }, []);
  //console.log("curr:", currUser, "other:", otherUser);

  const sendMessage = () => {
    socket.emit("send_message", { message });
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
