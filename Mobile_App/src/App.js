import React, { useState } from "react";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false); // Trthai hthi nút "Stories" và "Detect"

  return (
    <div className="app-container">
      <div className="header">
        Application for Smart Glasses
      </div>

      <div className="main-content">
        <button
          className="circle-button"
          onClick={() => setIsVisible(!isVisible)} // Thdoi trạng thái
        >
          On/Off
        </button>

        {isVisible && (
          <div className="additional-buttons">
            <button className="additional-button">Stories</button>
            <button className="additional-button">Detect</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
