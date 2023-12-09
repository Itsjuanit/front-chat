// Chat.js
import React, { useState } from "react";
import ChatCard from "../components/ChatCard";
import ChatName from "../components/ChatName";
import io from "socket.io-client";

const socket = io("https://backend-react-1kcz.onrender.com");

function Chat() {
  const [username, setUsername] = useState("");

  const handleStartChat = (name) => {
    setUsername(name);
  };

  return (
    <div className="flex h-[90vh]">
      <div className="flex-1">
        <ChatName onStartChat={handleStartChat} />
      </div>
      <div className="flex-1">
        <ChatCard name={username} />
      </div>
    </div>
  );
}

export default Chat;
