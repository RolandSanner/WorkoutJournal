import React from 'react';

const Footer = ({ theme }) => {
  return (
    <footer className={`footer ${theme}`}>
      {/* Add your footer content here */}
      <div className="footer-content">
        <p>&copy; 2023 Workout Journal -J. All rights reserved.</p>
        {/* Add additional links or information as needed */}
      </div>
    </footer>
  );
};

export default Footer;