import React from "react";
import classNames from "../utils/class-names";

function PlayPauseButton({
  setSession,
  isTimerRunning,
  setIsTimerRunning,
  timeRemaining,
}) {
  /*****************************************************
   ********** Play/Pause Button Event Handler **********
   ****************************************************/
  function playPause() {
    setIsTimerRunning((prevState) => {
      const nextState = !prevState;
      if (nextState) {
        setSession((prevStateSession) => {
          // If the timer is starting and the previous session is null,
          // start a focusing session.
          if (prevStateSession === null) {
            return {
              label: "Focusing",
              timeRemaining,
            };
          }
          return prevStateSession;
        });
      }
      return nextState;
    });
  }

  /************************************************
   ************* JSX Return Statement *************
   ***********************************************/
  return (
    <button
      type="button"
      className="btn btn-primary"
      data-testid="play-pause"
      title="Start or pause timer"
      onClick={playPause}
    >
      <span
        className={classNames({
          oi: true,
          "oi-media-play": !isTimerRunning,
          "oi-media-pause": isTimerRunning,
        })}
      />
    </button>
  );
}

export default PlayPauseButton;
