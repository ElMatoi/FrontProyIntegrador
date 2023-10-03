'use client';
import Link from "next/link";
import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Login from '../login/page';

const Navbar: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleRegistrationForm = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <nav className="bg-white shadow-navbar h-16 relative">
      <div className="pl-10 pr-10 mx-auto px-4 h-full flex items-center justify-between">
        <button
          onClick={() => setIsLoginOpen(true)}
          className="text-black font-semibold transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer"
        >
          Iniciar sesión
        </button>

        <Link href="/" legacyBehavior>
  <a className="flex-shrink-0 text-3xl font-bold text-gray-900 cursor-pointer ml-60">
    TecladosLabs
  </a>
</Link>

        <div className="flex-grow">
          <ul className="flex items-center justify-center space-x-10 text-lg">
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-black font-semibold transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer">
                  Teclados
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-black font-semibold transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer">
                  Teclas
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-black font-semibold transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer">
                  Accesorios
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-shrink-0">
          <FaShoppingCart className="text-black text-2xl transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer" />
        </div>

        {isLoginOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <Login />
              <button
                onClick={() => setIsLoginOpen(false)}
                className="mt-4 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
