// SandboxConfig.js
import React, { useState } from 'react';

const SandboxConfig = () => {
  const [config, setConfig] = useState({
    feature1: true,
    feature2: false,
    feature3: true,
  });

  const handleConfigChange = (feature, value) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      [feature]: value,
    }));
  };

  return (
    <div className="sandbox-config">
      <h3>Sandbox Configuration</h3>
      <div>
        <label>
          <input
            type="checkbox"
            checked={config.feature1}
            onChange={(e) => handleConfigChange('feature1', e.target.checked)}
          />
          Feature 1
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={config.feature2}
            onChange={(e) => handleConfigChange('feature2', e.target.checked)}
          />
          Feature 2
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={config.feature3}
            onChange={(e) => handleConfigChange('feature3', e.target.checked)}
          />
          Feature 3
        </label>
      </div>
    </div>
  );
};

export default SandboxConfig;