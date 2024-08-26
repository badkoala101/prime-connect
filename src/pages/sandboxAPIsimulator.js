//SandboxAPISimulator.js
import React, { useState } from 'react';

const SandboxAPISimulator = () => {
  const [apiEndpoint, setApiEndpoint] = useState('');
  const [apiResponse, setApiResponse] = useState('');

  const handleApiEndpointChange = (e) => {
    setApiEndpoint(e.target.v alue);
  };

  const handleApiResponseChange = (e) => {
    setApiResponse(e.target.value);
  };

  const simulateAPICall = () => {
    // Simulate an API call by returning the specified response
    console.log(`Simulating API call to ${apiEndpoint}`);
    return JSON.parse(apiResponse);
  };

  return (
    <div className="sandbox-api-simulator">
      <h3>Sandbox API Simulator</h3>
      <div>
        <label htmlFor="api-endpoint">API Endpoint:</label>
        <input
          id="api-endpoint"
          type="text"
          value={apiEndpoint}
          onChange={handleApiEndpointChange}
          placeholder="/api/users"
        />
      </div>
      <div>
        <label htmlFor="api-response">API Response:</label>
        <textarea
          id="api-response"
          value={apiResponse}
          onChange={handleApiResponseChange}
          placeholder='{"users": [{"id": 1, "name": "John Doe"}]}'
        ></textarea>
      </div>
      <button onClick={simulateAPICall}>Simulate API Call</button>
    </div>
  );
};

export default SandboxAPISimulator;