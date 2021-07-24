import React from "react";

function StopButton({ session, setSession, setIsTimerRunning }) {
  /*******************************
   ** Stop Button Event Handler **
   *******************************/
  function stop() {
    setIsTimerRunning(() => {
      setSession(null);
      return false;
    });
  }

  /******************************************
   ********** JSX Return Statement **********
   *****************************************/
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
