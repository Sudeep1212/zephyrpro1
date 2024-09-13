import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Add custom styles for centering

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/sponsors">Sponsors</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
