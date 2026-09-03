import React from "react";
import ChatHead from "./ChatHead";
//import MessageForm from "./MessageForm";
import NewMessage from "./NewMessage";
import Loader from "../../Components/ui/Loader";

const meStyle = {
  backgroundColor: "blue",
  color: "white",
  alignSelf: "end",
};

const MessagesTile = ({ messages, setMessages, me, partner }) => {
  console.log(messages);
  return (
    <>
      {partner ? (
        <div className="parent h-[calc(100vh-4rem)] flex flex-col overflow-hidden">
          <div className="h-2/20">
            <ChatHead partner={partner} />
          </div>

          <div className=" overflow-scroll h-15/20 flex flex-col">
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
              <h1 className="mx-auto text-xl font-medium mt-8">No Msgs</h1>
            )}
          </div>
          <div className="h-3/20">
            <NewMessage me={me} other={partner._id} setMessages={setMessages} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MessagesTile;
