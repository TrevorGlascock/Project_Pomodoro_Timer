import React from "react";

function ProgressBar({ currentTime, totalTime }) {
  //Determines the percentage of total progress for the bar
  const progress = (currentTime / totalTime) * 100;

  /****************************************************
   *************** JSX Return Statement  **************
   ***************************************************/
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
