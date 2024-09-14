import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 py-3">
      <ul className="flex justify-center items-center gap-5 list-none">
        <li>
          <Link to="/" className="text-white text-lg px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/events" className="text-white text-lg px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-300">
            Events
          </Link>
        </li>
        <li>
          <Link to="/sponsors" className="text-white text-lg px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-300">
            Sponsors
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
