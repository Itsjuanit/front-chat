import React, { useState, useEffect } from "react";
import axios from "axios";
import { RandomAvatar } from "react-random-avatars";

const ChatCard = ({ name }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    // Obtener mensajes existentes al cargar el componente
    getMessages();
  }, []);

  const getMessages = async () => {
    try {
      const response = await axios.get(
        "https://backend-react-1kcz.onrender.com/api/messages"
      );

      // Verificar que response.data.messages sea un array antes de actualizar el estado
      if (Array.isArray(response.data.messages)) {
        setMessages(response.data.messages);
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

  const handleSendMessage = async () => {
    try {
      // Enviar un nuevo mensaje al backend
      await axios.post("https://backend-react-1kcz.onrender.com/api/save", {
        message: inputMessage,
        from: name,
      });

      // Obtener mensajes actualizados después de enviar uno nuevo
      getMessages();

      setInputMessage(""); // Limpiar el campo de entrada
    } catch (error) {
      console.error("Error al enviar mensaje:", error.response.data);
    }
  };

  return (
    <div className={`flex flex-col h-full p-4 ${!name && "hidden"}`}>
      <div className="flex-1 overflow-y-auto border border-gray-300 rounded p-4 mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`text-white p-2 rounded ${
              message.sender === name ? "bg-green-500 mr-2" : "bg-blue-500 ml-2"
            }`}
          >
            <div className="flex items-center">
              <RandomAvatar name={message.sender} size={30} />
              <span
                className={`font-bold ml-2 ${
                  message.sender === name && "text-white"
                }`}
              >
                {message.sender}:
              </span>
            </div>
            {message.text}
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
    </div>
  );
};

export default ChatCard;
