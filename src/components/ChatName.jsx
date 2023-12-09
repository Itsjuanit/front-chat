// ChatName.js
import React, { useState } from "react";

function ChatName({ onStartChat }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const onlyLetters = /^[A-Za-z]+$/;

    if (onlyLetters.test(e.target.value) || e.target.value === "") {
      setInputValue(e.target.value);
    }
  };

  const handleStartChatClick = () => {
    if (inputValue.trim() !== "") {
      onStartChat(inputValue);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <label htmlFor="chatName" className="text-[#FF5733] mb-2 text-4xl">
        Ingresa tu nombre:
      </label>
      <input
        type="text"
        id="chatName"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-[#FF5733] p-2 rounded w-48 text-center mb-4"
      />
      <button
        onClick={handleStartChatClick}
        className="border bg-[#FF5733] p-2 rounded text-white"
      >
        Comenzar a chatear
      </button>
    </div>
  );
}

export default ChatName;
