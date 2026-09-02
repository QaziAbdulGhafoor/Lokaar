// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { socket } from "../../services/Socket";

// const createConversation = (currUser, otherUser) => {
//   const [conversation, setConversation] = useState("");
//   const roomId =
//     currUser && otherUser ? [otherUser, currUser].sort().join("_") : "";
//   if (!roomId) {
//     return;
//   } else {
//     socket.emit("join_room", { roomId, currUser, otherUser });
//   }

//   socket.on("conversation", (data) => {
//     // return data.conversationId;
//     // let conversation = data.conversationId;
//     setConversation(data.conversationId);
//   });

//   console.log(conversation);
// };

// export default createConversation;

import { socket } from "../../services/Socket";

const createConversation = (currUser, otherUser) => {
  return new Promise((resolve, reject) => {
    const roomId =
      currUser && otherUser ? [otherUser, currUser].sort().join("_") : "";

    if (!roomId) {
      reject(new Error("Users are missing"));
      return;
    }

    socket.emit("join_room", {
      roomId,
      currUser,
      otherUser,
    });

    socket.once("conversation", (data) => {
      resolve(data.conversationId);
    });
  });
};

export default createConversation;
