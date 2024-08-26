// Sandbox.js
import React, { useState } from 'react';
import './sandbox.css';

const Sandbox = () => {
  const [isInSandbox, setIsInSandbox] = useState(false);

  const toggleSandbox = () => {
    setIsInSandbox(!isInSandbox);
  };

  return (
    <div className="sandbox-container">
      <h2>Sandbox Environment</h2>
      <button className="sandbox-toggle" onClick={toggleSandbox}>
        {isInSandbox ? 'Exit Sandbox' : 'Enter Sandbox'}
      </button>
      {isInSandbox && (
        <div className="sandbox-content">
          <p>
            sandbox tyically need to have the appropriate permissions and access rights 
          </p>
          {/* Add your sandbox-specific components or functionality here */}
        </div>
      )}
    </div>
  );
};
export default Sandbox;