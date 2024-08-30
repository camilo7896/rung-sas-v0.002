import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="../../public/logo1.png" // Reemplaza esto con la ruta a tu logo
            alt="Logo"
            className="h-10 mr-3"
          />
          <a href="#" className="text-white text-2xl font-bold">
            Rung
          </a>
        </div>
        <button
          onClick={toggleMenu}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <div className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#home" className="text-white block md:inline-block px-3 py-2 rounded-md text-base font-medium">
            Inicio
          </a>
          <a href="#services" className="text-white block md:inline-block px-3 py-2 rounded-md text-base font-medium">
            Servicios
          </a>
          <a href="#about" className="text-white block md:inline-block px-3 py-2 rounded-md text-base font-medium">
            Acerca de
          </a>
          <a href="#contact" className="text-white block md:inline-block px-3 py-2 rounded-md text-base font-medium">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
