import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { RandomAvatar } from "react-random-avatars";

const ChatCard = ({ name }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [avatarSeeds, setAvatarSeeds] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const getMessages = async () => {
    try {
      const response = await axios.get(
        "https://backend-react-1kcz.onrender.com/api/messages"
      );

      if (Array.isArray(response.data.messages)) {
        setMessages(response.data.messages);
        updateAvatarSeeds(response.data.messages);
      } else {
        console.error(
          "La respuesta de la API no contiene un array de mensajes:",
          response.data
        );
      }
    } catch (error) {
      console.error("Error al obtener mensajes:", error);
    }
  };

  const updateAvatarSeeds = (messages) => {
    const newAvatarSeeds = { ...avatarSeeds };

    messages.forEach((message) => {
      // Solo generamos la semilla si no existe para ese usuario
      if (!newAvatarSeeds[message.from]) {
        newAvatarSeeds[message.from] = Math.random();
      }
    });

    // Mantenemos constante la semilla del usuario actual
    if (!newAvatarSeeds[name]) {
      newAvatarSeeds[name] = avatarSeeds[name] || Math.random();
    }

    setAvatarSeeds(newAvatarSeeds);
  };

  const handleSendMessage = async () => {
    // Verificar si el usuario tiene un nombre
    if (!name) {
      setIsModalOpen(true);
      setModalMessage("Para enviar mensajes, primero debes cargar tu nombre.");
      return;
    }

    try {
      await axios.post("https://backend-react-1kcz.onrender.com/api/save", {
        message: inputMessage,
        from: name,
      });

      updateAvatarSeeds([...messages, { from: name }]);
      getMessages();

      setInputMessage("");
    } catch (error) {
      console.error("Error al enviar mensaje:", error.response.data);
    }
  };

  return (
    <div className="flex flex-col h-full p-4">
      <div
        className="flex-1 overflow-y-auto border border-gray-300 rounded p-4 mb-4"
        style={{ display: "flex", flexDirection: "column-reverse" }}
        ref={containerRef}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`text-white p-2 rounded ${
              message.from === name
                ? "bg-green-500 self-end"
                : "bg-blue-500 self-start"
            }`}
            style={{ marginBottom: "8px", width: "fit-content" }}
          >
            <div className="flex items-center">
              {message.from !== name && (
                <RandomAvatar
                  name={message.from}
                  size={30}
                  seed={avatarSeeds[message.from]}
                />
              )}
              <span
                className={`font-bold ml-2 ${
                  message.from === name ? "text-white" : ""
                }`}
              >
                {message.from}:
              </span>
            </div>
            {message.message}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="flex-1 p-2 mr-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleSendMessage}
          className="p-2 text-white rounded bg-[#FF5733]"
        >
          Enviar
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-red-500">{modalMessage}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 p-2 bg-[#FF5733] text-white rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatCard;
