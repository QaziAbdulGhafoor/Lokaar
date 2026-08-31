import React from "react";
import ChatHead from "./ChatHead";
//import MessageForm from "./MessageForm";
import NewMessage from "./NewMessage";

const meStyle = {
  backgroundColor: "blue",
  color: "white",
  alignSelf: "end",
};

const MessagesTile = ({ messages, setMessages, me, partner }) => {
  console.log(messages);
  return (
    <div className="parent h-screen flex flex-col w-15/20 overflow-hidden">
      <div className="h-1/10">
        <ChatHead partner={partner} />
      </div>

      <div className=" overflow-scroll h-7/10 flex flex-col">
        {messages.length > 0 ? (
          <>
            {messages.map((msg) => {
              return (
                <p
                  key={msg._id}
                  style={me === msg.sender ? meStyle : null}
                  className="bg-gray-200 min-w-16 max-w-52 w-fit rounded px-4 py-2 my-1 mx-2"
                >
                  {msg.text}
                  <br />
                  <span className="text-sm text-gray-400 mx-auto">
                    {new Date(msg.createdAt).toLocaleString("en-US", {
                      day: "numeric",
                      month: "short",
                      //year: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </span>
                </p>
              );
            })}
          </>
        ) : (
          <>No Msgs</>
        )}
      </div>
      <div className="h-2/10">
        <NewMessage me={me} other={partner._id} setMessages={setMessages} />
      </div>
    </div>
  );
};

export default MessagesTile;
