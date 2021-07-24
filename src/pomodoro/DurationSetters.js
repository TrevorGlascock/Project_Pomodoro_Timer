import React from "react";
import DurationSetter from "./DurationSetter";

//DurationSetters Component returns a FocusSetter and a BreakSetter by using two dynamic DurationSetter components
function DurationSetters(props) {
  return (
    <div className="row">
      {/*****************************
       *** Focus Setter Component ***
       *****************************/}
      <DurationSetter
        session={props.session}
        durationObject={props.focusObj}
        setterFunc={props.setFocusObj}
      />

      {/*****************************
       *** Break Setter Component ***
       *****************************/}
      <DurationSetter
        session={props.session}
        durationObject={props.breakObj}
        setterFunc={props.setBreakObj}
      />
    </div>
  );
}

export default DurationSetters;
