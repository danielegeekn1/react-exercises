//ex custom-hooks-02

import { useState } from "react";

//Create a custom hook that keeps track of the state of a controlled form
//with the username and password inputs, and returns the current value of the inputs
// as well as an event handler to update either input.

export function ControlInputs() {
  const [state, setState] = useState(null);
  const trackState = (e) => {
    const { value } = e.target;
    setState(value);
  };
  return (
    <div>
      <input type="username" onChange={trackState} />
      <input type="password" onChange={trackState} />
      <p>{state}</p>
    </div>
  );
}
