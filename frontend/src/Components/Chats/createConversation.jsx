import { useParams } from "react-router-dom";
import { socket } from "../../Socket";

const createConversation = (currUser, otherUser) => {
  let conversationId = "";
  const roomId =
    currUser && otherUser ? [otherUser, currUser].sort().join("_") : "";
  if (!roomId) {
    return;
  } else {
    socket.emit("join_room", { roomId, currUser, otherUser });
  }

  socket.on("conversation", (data) => {
    return data.conversationId;
    let conversationId = data.conversationId;
  });

  console.log(conversationId);
  return conversationId;
};

export default createConversation;
