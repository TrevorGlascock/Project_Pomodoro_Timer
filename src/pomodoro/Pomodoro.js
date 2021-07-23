import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import DurationSetters from "./DurationSetters";
import Session from "./Session";

// These functions are defined outside of the component to insure they do not have access to state
// and are, therefore more likely to be pure.

/**
 * Update the session state with new state after each tick of the interval.
 * @param prevState
 *  the previous session state
 * @returns
 *  new session state with timing information updated.
 */
function nextTick(prevState) {
  const timeRemaining = Math.max(0, prevState.timeRemaining - 1);
  return {
    ...prevState,
    timeRemaining,
  };
}

/**
 * Higher order function that returns a function to update the session state with the next session type upon timeout.
 * @param focusObj
 *    the current focus object which holds its current duration and important constants
 * @param breakObj
 *    the current break object which holds its current duration and important constants
 * @returns
 *  function to update the session state.
 */
function nextSession(focusDuration, breakDuration) {
  /**
   * State function to transition the current session type to the next session. e.g. On Break -> Focusing or Focusing -> On Break
   */
  return (currentSession) => {
    if (currentSession.label === "Focusing") {
      return {
        label: "On Break",
        timeRemaining: breakDuration * 60,
      };
    }
    return {
      label: "Focusing",
      timeRemaining: focusDuration * 60,
    };
  };
}

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  // The current session - null where there is no session running
  const [session, setSession] = useState(null);

  //Focus Timer Constants
  const defaultFocusState = {
    duration: 25,
    step: 5,
    max: 60,
    min: 5,
    id: "Focus",
  };
  const [focusObj, setFocusObj] = useState(defaultFocusState);

  //Break Timer constants
  const defaultBreakState = {
    duration: 5,
    step: 1,
    max: 15,
    min: 1,
    id: "Break",
  };
  const [breakObj, setBreakObj] = useState(defaultBreakState);

  /**
   * Custom hook that invokes the callback function every second
   *
   * NOTE: You will not need to make changes to the callback function
   */
  useInterval(
    () => {
      if (session.timeRemaining === 0) {
        new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
        return setSession(nextSession(focusObj.duration, breakObj.duration));
      }
      return setSession(nextTick);
    },
    isTimerRunning ? 1000 : null
  );

  /**
   * Called whenever the play/pause button is clicked.
   */
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
              timeRemaining: focusObj.duration * 60,
            };
          }
          return prevStateSession;
        });
      }
      return nextState;
    });
  }

  function stop() {
    setIsTimerRunning(() => {
      setSession(null);
      return false;
    });
  }

  return (
    <div className="pomodoro">
      <DurationSetters
        session={session}
        focusObj={focusObj}
        setFocusObj={setFocusObj}
        breakObj={breakObj}
        setBreakObj={setBreakObj}
      />
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
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
          </div>
        </div>
      </div>
      <Session
        session={session}
        focusDuration={focusObj.duration}
        breakDuration={breakObj.duration}
      />
    </div>
  );
}

export default Pomodoro;
