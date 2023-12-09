import { Link } from "react-router-dom";
import chatImage from "../assets/imagenprincipal.png";

function Index() {
  return (
    <div className="flex flex-col md:flex-row h-[90vh] justify-center items-center overflow-y-hidden">
      <div className="flex-1 p-6 text-center md:text-left md:w-1/2 overflow-y-auto">
        <h1 className="font-#FF5733 text-4xl text-[#FF5733]">
          ¿Qué es CHATAPP?
        </h1>
        <p className="mt-3">
          Descubre una nueva forma de conectar, compartir ideas y hacer amigos
          en tiempo real con CHATAPP. Nuestra plataforma de chat en vivo está
          diseñada para ofrecerte una experiencia única y emocionante.
          ¡Sumérgete en el mundo de las conversaciones vibrantes ahora!
        </p>
        <Link
          to="/chat"
          className="mt-4 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-[#FF5733] rounded shadow ripple hover:shadow-lg focus:outline-none"
        >
          CHAT
        </Link>
      </div>
      <div className="flex-1 hidden md:block">
        <img
          src={chatImage}
          alt="Sismo"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}

export default Index;
