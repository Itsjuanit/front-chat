import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../pages/Footer";
import messageImage from "../assets/message.png";

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-[#FFCF99] p-4 flex justify-between items-center relative border-#FF5733">
        <div className="flex items-center">
          <img
            src={messageImage}
            alt="Descripción de la imagen"
            className="h-12 w-12 object-cover mr-2"
          />
          <h2 className="text-4xl font-#FF5733 text-[#FF5733]">CHATAPP</h2>
        </div>
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="h-1 w-5 bg-[#FF5733] my-1"></div>
          <div className="h-1 w-5 bg-[#FF5733] my-1"></div>
          <div className="h-1 w-5 bg-[#FF5733] my-1"></div>
        </button>

        {/* Botones INICIO y CHAT solo en tamaños grandes */}
        <ul className={`lg:flex ${isMenuOpen ? "hidden" : "flex"}`}>
          <li className="inline-block">
            <Link
              onClick={handleLinkClick}
              className="text-white p-2 rounded hover:bg-[#FF5733] block text-center"
              to="/"
            >
              INICIO
            </Link>
          </li>
          <li className="inline-block">
            <Link
              onClick={handleLinkClick}
              className="text-white p-2 rounded hover:bg-[#FF5733] block text-center"
              to="/chat"
            >
              CHAT
            </Link>
          </li>
        </ul>
      </nav>

      {/* Menú desplegable solo en tamaños pequeños */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="bg-[#FFCF99] p-4">
            <li>
              <Link
                onClick={handleLinkClick}
                className="text-[#FF5733] p-2 rounded hover:bg-[#FF5733] block text-center"
                to="/"
              >
                INICIO
              </Link>
            </li>
            <li>
              <Link
                onClick={handleLinkClick}
                className="text-[#FF5733] p-2 rounded hover:bg-[#FF5733] block text-center"
                to="/chat"
              >
                CHAT
              </Link>
            </li>
          </ul>
        </div>
      )}

      <main className="p-10 flex-grow" style={{ overflowX: "auto" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
