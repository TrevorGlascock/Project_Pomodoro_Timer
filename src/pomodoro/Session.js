import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";
import ProgressBar from "./ProgressBar";

function Session({ session, focusDuration, breakDuration }) {
  // Duration is dynamically assigned to match the session-type on re-render
  const duration =
    session?.label === "Focusing" ? focusDuration : breakDuration;
  //TotalTime is the duration (minutes) parsed into seconds.
  const totalTime = duration * 60;

  /******************************************************************
   ********************** JSX Return Statement **********************
   *****************************************************************/
  return (
    session && (
      <div>
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {session.label} for {minutesToDuration(duration)} minutes
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <ProgressBar
              currentTime={Math.abs(session.timeRemaining - totalTime)}
              totalTime={totalTime}
            />
          </div>
        </div>
      </div>
    )
  );
}
export default Session;
