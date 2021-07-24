import React from "react";

function StopButton({ session, setSession, setIsTimerRunning }) {
  /**
   *    Called whenever the stop button is clicked
   */

  function stop() {
    setIsTimerRunning(() => {
      setSession(null);
      return false;
    });
  }

  return (
    <button
      type="button"
      className="btn btn-secondary"
      data-testid="stop"
      title="Stop the session"
      onClick={stop}
      disabled={!session}
    >
      <span className="oi oi-media-stop" />
    </button>
  );
}

export default StopButton;
