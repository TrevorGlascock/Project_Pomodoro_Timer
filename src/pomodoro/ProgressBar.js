import React from "react";

function ProgressBar({ currentTime, totalTime }) {
  const progress = (currentTime / totalTime) * 100;

  return (
    <div className="progress" style={{ height: "20px" }}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={progress}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ProgressBar;
