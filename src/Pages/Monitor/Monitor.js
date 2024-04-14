// src/GlucoseMonitor.js
import React, { useState } from 'react';
 import './Monitor.css'; // Import the CSS file
import Footer from '../Footer/Footer';
const Monitor = () => {
 const [glucoseLevel, setGlucoseLevel] = useState(100); // Initial glucose level

 const updateGlucoseLevel = () => {
    // Simulate updating glucose level
    const newLevel = Math.floor(Math.random() * 100) + 1; // Random glucose level between 1 and 100
    setGlucoseLevel(newLevel);
 };

 return (
  <>
    <div className="glucose-monitor">
      <h1>Glucose Monitor</h1>
      <div className="glucose-reading">
        <p>Current Glucose Level:</p>
        <h2>{glucoseLevel} mg/dL</h2>
      </div>
      <button onClick={updateGlucoseLevel} className="update-button">Update Glucose Level</button>
    </div>
   
  </>
 );
};

export default Monitor;
