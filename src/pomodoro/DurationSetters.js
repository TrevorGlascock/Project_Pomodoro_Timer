import React, { useState } from "react";
import DurationSetter from "./DurationSetter";

function DurationSetters(props) {
  return (
    <div className="row">
      <DurationSetter
        session={props.session}
        durationObject={props.focusObj}
        setterFunc={props.setFocusObj}
      />
      <DurationSetter
        session={props.session}
        durationObject={props.breakObj}
        setterFunc={props.setBreakObj}
      />
    </div>
  );
}

export default DurationSetters;
