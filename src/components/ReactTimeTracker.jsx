import React, { useState, useEffect } from "react";
import "./ReactTimeTracker.css";

const ReactTimeTracker = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const secs = String(time % 60).padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <div className="tracker-container">
      <h1 className="time-display">{formatTime(seconds)}</h1>
      <div className="button-group">
        <button onClick={handleToggle} className={isRunning ? "pause" : "start"}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={handleReset} className="reset">Reset</button>
      </div>
    </div>
  );
};

export default ReactTimeTracker;
