import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import profil from "../Asset/profil.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProfil, setIsOpenProfil] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-8">
          <h1 className="text-white text-lg md:text-2xl font-bold">
            <a href="/" className="hover:text-blue-300 transition duration-300">
              Suzuki NJS Naripan Bandung
            </a>
          </h1>
          <a
            href="/pricelist"
            className="text-white font-semibold text-lg hover:text-blue-300 transition duration-300 hidden md:block mt-[5px]"
          >
            Pricelist
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <div className="text-white font-bold text-right">
            <div>Hilga Julian</div>
            <a
              href="https://wa.me/6287720701827"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white hover:text-blue-300 font-semibold transition duration-300"
            >
              +62 877-2070-1827
            </a>
          </div>
          <img
            src={profil}
            className="w-12 h-12 object-cover rounded-full cursor-pointer hover:opacity-80 transition"
            onClick={() => setIsOpenProfil(true)}
          />
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpenProfil && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="w-[80%] md:w-[350px] h-full bg-white shadow-xl rounded-l-2xl p-6 transform transition-transform duration-300 ease-in-out">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl transition"
              onClick={() => setIsOpenProfil(false)}
            >
              &times;
            </button>

            <div className="flex flex-col items-center mt-10">
              <img
                src={profil}
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-300 shadow-md"
              />
              <p className="text-gray-800 font-semibold text-center mt-4 text-lg leading-relaxed italic">
                "Saya siap membantu menemukan jenis mobil yang cocok sesuai
                dengan
                <span className="text-blue-600"> budget </span> Anda."
              </p>
            </div>
          </div>
        </div>
      )}

      <div
        className={`absolute top-[60px] left-0 w-full bg-blue-600 shadow-lg flex flex-col items-start py-4 space-y-3 transition-all duration-300 ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        } px-6`}
      >
        <a
          href="/pricelist"
          className="text-white font-semibold text-lg hover:text-blue-300 transition duration-300 w-full text-left"
        >
          Pricelist
        </a>
        <div className="text-white font-bold w-full text-left flex items-center">
          <img
            src={profil}
            className="w-12 h-12 object-cover rounded-full cursor-pointer"
            onClick={() => setIsOpenProfil(true)}
          />
          <div className="ml-4 flex flex-col">
            <div>Hilga Julian</div>
            <a
              href="https://wa.me/6287720701827"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white hover:text-blue-300 font-semibold transition duration-300"
            >
              +62 877-2070-1827
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
