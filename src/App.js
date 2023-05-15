import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import WorkoutLog from './WorkoutLog';
import ProgressChart from './ProgressChart';
import CalendarView from './CalendarView';
import UserInformation from './UserInformation';

function App() {
  const [theme, setTheme] = useState('light');
  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--background-color', 'var(--background-color-dark)');
      document.documentElement.style.setProperty('--text-color', 'var(--text-color-dark)');
    } else {
      document.documentElement.style.setProperty('--background-color', 'var(--background-color-light)');
      document.documentElement.style.setProperty('--text-color', 'var(--text-color-light)');
    }
  }, [theme]);

 

  return (
    <div className={`app-container ${theme}`}>
      <Router>
        <Navbar theme={theme} toggleTheme={handleThemeToggle} />
        <Routes>
          <Route
            path="/"
            element={<WorkoutLog theme={theme} />}
          />
          <Route
            path="/workout-log"
            element={<WorkoutLog theme={theme} />}
          />
          <Route
            path="/progress-chart"
            element={<ProgressChart theme={theme} />}
          />
          <Route
            path="/calendar-view"
            element={<CalendarView theme={theme} />}
          />
          <Route
            path="/user-information"
            element={<UserInformation theme={theme} />}
          />
        </Routes>
        <Footer theme={theme} />
      </Router>
    </div>
  );
}
export default App;