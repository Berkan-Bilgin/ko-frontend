import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Background from "../assets/background.webp";

const Layout = ({ children }) => {
  return (
    <div
      className="bg-fixed min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <nav className="sticky   top-0 left-0 w-full z-10 bg-green-400 bg-opacity-75 p-4">
        <div className="container px-4 max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/characters" className="link-base">
                Characters
              </Link>
            </li>

            <li>
              <Link to="/favorites" className="link-base ">
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container max-w-6xl mx-auto p-4">{children}</div>
    </div>
  );
};

export default Layout;
