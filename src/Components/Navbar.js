import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import logo from "./../Images/yoga.png";
import logoDark from "./../Images/yoga-dark.png";
import DarkModeToggler from "./DarkModeToggler/DarkModeToggler";
import DarkModeTogglerNav from "./DarkModeToggler/DarkModeTogglerNav";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [nav, setNav] = useState(false);
  const { user, logOut, dark } = useContext(AuthContext);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-emerald-900 fixed w-full z-10 ease-in duration-500">
        <div className="flex items-center justify-between mx-auto px-4 md:px-12">
          <div className="flex items-center">
            <img src={dark ? logoDark : logo} className="h-12 md:h-20" alt="" />
            <span className="text-lg md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              YogaCampers
            </span>
          </div>
          <div className="flex items-center space-x-4 md:order-2 ease-out duration-500">
            <DarkModeToggler />
            {user ? (
              <div className="relative" onClick={() => setToggle(!toggle)}>
                {user?.photoURL ? (
                  <img
                    className="h-12 w-12 rounded-full cursor-pointer"
                    src={user?.photoURL}
                    referrerPolicy="no-referrer"
                    alt=""
                  />
                ) : (
                  <img
                    className="h-12 w-12 rounded-full cursor-pointer"
                    src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent.png"
                    alt=""
                  />
                )}
                {toggle && (
                  <div className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-52 dark:bg-gray-700 dark:divide-gray-600">
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                      <div>{user?.displayName}</div>
                      <div className="font-medium truncate">{user?.email}</div>
                    </div>
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownUserAvatarButton"
                    >
                      <li>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Settings
                        </Link>
                      </li>
                    </ul>
                    <div className="py-2">
                      <Link
                        onClick={() => logOut()}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Log out
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-green-500 text-white px-3 py-1 md:px-5 md:py-2 rounded-full hover:bg-green-600">
                  Login
                </button>
              </Link>
            )}
            <button
              onClick={() => setNav(!nav)}
              className={`lg:hidden text-xl md:text-2xl  border-2 rounded-md p-0.5 md:p-1 ${
                dark ? "text-white" : "text-black"
              }`}
            >
              {!nav ? <RiMenu3Fill /> : <RiCloseFill />}
            </button>
          </div>
          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 mr-8">
            <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-emerald-900 dark:border-gray-700 text-lg ease-in duration-500">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:bg-transparent md:text-green-500 md:p-0 md:dark:text-lime-400"
                      : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:bg-transparent md:text-green-500 md:p-0 md:dark:text-lime-400"
                      : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                  to="/trainers"
                >
                  Trainers
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:bg-transparent md:text-green-500 md:p-0 md:dark:text-lime-400"
                      : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                  to="/classes"
                >
                  Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:bg-transparent md:text-green-500 md:p-0 md:dark:text-lime-400"
                      : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:bg-transparent md:text-green-500 md:p-0 md:dark:text-lime-400"
                      : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className={
              nav
                ? "fixed left-0 top-12 md:top-20 w-[50%] h-full bg-white dark:bg-emerald-900 ease-in duration-500 lg:hidden z-10"
                : "fixed left-[-100%] ease-in-out duration-300 top-12 md:top-20 w-[50%] h-full bg-white dark:bg-emerald-900 z-10"
            }
          >
            <ul className="uppercase p-2 md:p-4 link-cursor flex flex-col text-sm md:text-md font-medium">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:p-4"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100  md:hover:text-green-500 md:p-4 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
                to="/"
                onClick={() => setNav(!nav)}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:p-4"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100  md:hover:text-green-500 md:p-4 dark:text-white  dark:hover:bg-green-700 dark:hover:text-white  dark:border-gray-700"
                }
                to="/trainers"
                onClick={() => setNav(!nav)}
              >
                Trainers
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:p-4"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100  md:hover:text-green-500 md:p-4 dark:text-white  dark:hover:bg-green-700 dark:hover:text-white  dark:border-gray-700"
                }
                to="/classes"
                onClick={() => setNav(!nav)}
              >
                Classes
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:p-4"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100  md:hover:text-green-500 md:p-4 dark:text-white  dark:hover:bg-green-700 dark:hover:text-white  dark:border-gray-700"
                }
                to="/contact"
                onClick={() => setNav(!nav)}
              >
                Contact
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:p-4"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:text-green-500 md:p-4 dark:text-white  dark:hover:bg-green-700 dark:hover:text-white  dark:border-gray-700"
                }
                to="/about"
                onClick={() => setNav(!nav)}
              >
                About Us
              </NavLink>
            </ul>
            <span className="flex justify-center">
              <DarkModeTogglerNav />
            </span>
          </div>
        </div>
        <div
          className={
            nav
              ? "fixed lg:hidden left-0 top-12 md:top-20 w-full h-[100vh] bg-black/25 backdrop-blur ease-out duration-500"
              : "fixed lg:hidden left-[-100%] top-12 md:top-20 w-full h-[100vh] bg-white/25 backdrop-blur ease-in duration-500"
          }
        ></div>
      </nav>
    </>
  );
}

export default Navbar;
