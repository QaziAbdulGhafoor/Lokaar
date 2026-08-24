import React, { useEffect, useState, useContext } from "react";
import api from "../../API/api";

const AllChats = () => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const fetchChats = async () => {
      const res = await api.get("/conversations");
      console.log(res.data.conversations);
      setChats(res.data.conversations);
    };

    fetchChats();
  }, []);

  return (
    <div>
      <p className="font-3xl font-bold text-center mt-54">All chats</p>
      {chats.length > 0 ? (
        <>All Chats</>
      ) : (
        <div className="card w-32 mx-auto px-12">
          No Chats Kindly Chat To Someone
        </div>
      )}
    </div>
  );
};

export default AllChats;
