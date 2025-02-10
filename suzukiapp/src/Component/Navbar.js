import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          Suzuki NJS Naripan Bandung
        </h1>

        <div className="hidden md:flex space-x-6">
          <div className="flex gap-2">
            <div className="text-right text-white font-bold">
              <div>Hilga Julian</div>
              <div>
                <a>+62 877-2070-1827</a>
              </div>
            </div>
            <div>asassasa</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
