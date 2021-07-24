import React from "react";
import PlayPauseButton from "./PlayPauseButton";
import StopButton from "./StopButton";

function TimerControls({
  session,
  setSession,
  isTimerRunning,
  setIsTimerRunning,
  timeRemaining,
}) {
  /******************************************
   ********** JSX Return Statement **********
   *****************************************/
  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          {/**********************************
           *** Play/Pause Button Component ***
           **********************************/}
          <PlayPauseButton
            setSession={setSession}
            isTimerRunning={isTimerRunning}
            setIsTimerRunning={setIsTimerRunning}
            timeRemaining={timeRemaining}
          />
          {/**********************************
           ****** Stop Button Component ******
           **********************************/}
          <StopButton
            session={session}
            setSession={setSession}
            setIsTimerRunning={setIsTimerRunning}
          />
        </div>
      </div>
    </div>
  );
}

export default TimerControls;
