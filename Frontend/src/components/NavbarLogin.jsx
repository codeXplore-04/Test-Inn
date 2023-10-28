import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLogin, logOut } from "../utils/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NavbarLogin() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isUserSignedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <body className="bg-blue-500">
      <nav className="relative px-4 pt-4 flex justify-between items-center bg-white">
        <Link className="text-3xl font-bold leading-none flex" to="/dashboard">
          <img
            src="../../logo/TestInn.png"
            alt="Test-Inn Logo"
            className="h-16 px-4"
          />
        </Link>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={toggleMenu}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul
          className={`hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          {/* <li>
            <Link
              to="/dashboard"
              className="text-sm text-gray-400 hover:text-gray-500"
            >
              Home
            </Link>
          </li> */}
        </ul>
        <Link
          className="hidden lg:inline-block py-3 px-6 mx-4 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          href="#"
          to="/signup"
        >
          Signup
        </Link>
        <Link
          className="hidden lg:inline-block py-3 px-6 mx-2 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          href="#"
          to="/reset"
        >
          Forgot Password
        </Link>
      </nav>
      <div
        className={`navbar-menu relative z-50 ${isMenuOpen ? "" : "hidden"}`}
      >
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          onClick={toggleMenu}
        ></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
            <img
            src="../../logo/TestInn.png"
            alt="Test-Inn Logo"
            className="h-16 px-4"
          />
            </a>
            <button className="navbar-close" onClick={toggleMenu}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          {/* <div>
            <ul>
              <li className="mb-1">
                <Link
                  to="/dashboard"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div> */}
          <div className="mt-auto">
            <div className="pt-6">
              <Link
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                href="#"
                to="/signup"
              >
                Signup
              </Link>
              <Link
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                href="#"
                to="/reset"
              >
                Forgot Password
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </body>
  );
}

export default NavbarLogin;
