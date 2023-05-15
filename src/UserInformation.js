/* UserInformation.js */
import React from 'react';
import './UserInformation.css';

const UserInformation = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="user-info-container">
      <h2 className="user-info-title">User Information</h2>
      <div className="user-info">
        <span className="info-label">Name:</span>
        <span className="info-value">Jason Marcel Belmana</span>
      </div>
      <div className="user-info">
        <span className="info-label">Age:</span>
        <span className="info-value">32</span>
      </div>
      {/* Add more user information fields */}
    </div>
  );
};

export default UserInformation;
