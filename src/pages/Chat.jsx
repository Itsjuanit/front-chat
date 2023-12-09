import { useState } from "react";
import ChatCard from "../components/ChatCard";
import ChatName from "../components/ChatName";

function Chat() {
  const [username, setUsername] = useState("");

  const handleStartChat = (name) => {
    setUsername(name);
  };

  return (
    <div className="flex flex-col h-[90vh] sm:flex-row">
      <div className="flex-1 sm:order-2">
        <ChatCard name={username} />
      </div>
      <div className="flex-1 sm:order-1">
        <ChatName onStartChat={handleStartChat} />
      </div>
    </div>
  );
}

export default Chat;
