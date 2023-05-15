import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className={`navbar ${theme}`}>
      <ul>
        <li>
          <Link to="/" className={`tab ${theme === 'dark' ? 'active' : ''}`}>Home</Link>
        </li>
        <li>
          <Link to="/workout-log" className={`tab ${theme === 'dark' ? 'active' : ''}`}>Workout Log</Link>
        </li>
        <li>
          <Link to="/progress-chart" className={`tab ${theme === 'dark' ? 'active' : ''}`}>Progress Chart</Link>
        </li>
        <li>
          <Link to="/calendar-view" className={`tab ${theme === 'dark' ? 'active' : ''}`}>Calendar View</Link>
        </li>
        <li>
          <Link to="/user-information" className={`tab ${theme === 'dark' ? 'active' : ''}`}>User Information</Link>
        </li>
      </ul>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </nav>
  );
};

export default Navbar;