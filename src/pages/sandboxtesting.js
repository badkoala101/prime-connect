//SandboxTesting.js
import React, { useState } from 'react';

const SandboxTesting = () => {
  const [testData, setTestData] = useState('');

  const handleTestDataChange = (e) => {
    setTestData(e.target.value);
  };

  const runTest = () => {
    // Implement your sandbox-specific testing logic here
    console.log('Running test with data:', testData);
  };

  return (
    <div className="sandbox-testing">
      <h3>Sandbox Testing</h3>
      <textarea
        value={testData}
        onChange={handleTestDataChange}
        placeholder="Enter test data"
      ></textarea>
      <button onClick={runTest}>Run Test</button>
    </div>
  );
}; 
