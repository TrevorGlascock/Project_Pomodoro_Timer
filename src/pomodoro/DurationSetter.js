import React from "react";
import { minutesToDuration } from "../utils/duration";

function DurationSetter({ session, durationObject, setterFunc }) {
  /********************************************************
   ****** Dynamic Increment/Decrement Event Handlers ******
   *******************************************************/
  const handleIncrease = () => {
    setterFunc(({ duration }) => {
      return {
        ...durationObject,
        duration: Math.min(durationObject.max, duration + durationObject.step),
      };
    });
  };

  const handleDecrease = () => {
    setterFunc(({ duration }) => {
      return {
        ...durationObject,
        duration: Math.max(durationObject.min, duration - durationObject.step),
      };
    });
  };

  /****************************************************************************
   *************************** JSX Return Statement ***************************
   ***************************************************************************/
  return (
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span
          className="input-group-text"
          data-testid={`duration-${durationObject.id.toLowerCase()}`}
        >
          {`${durationObject.id}`} Duration:{" "}
          {minutesToDuration(durationObject.duration)}
        </span>
        <div className="input-group-append">
          <button
            type="button"
            className="btn btn-secondary"
            data-testid={`decrease-${durationObject.id.toLowerCase()}`}
            onClick={handleDecrease}
            disabled={session || durationObject.duration === durationObject.min}
          >
            <span className="oi oi-minus" />
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-testid={`increase-${durationObject.id.toLowerCase()}`}
            onClick={handleIncrease}
            disabled={session || durationObject.duration === durationObject.max}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DurationSetter;
