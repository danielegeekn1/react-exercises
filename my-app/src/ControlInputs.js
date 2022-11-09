//ex custom-hooks-02

import { useControlInputs } from "./useControlInputs";

//Create a custom hook that keeps track of the state of a controlled form
//with the username and password inputs, and returns the current value of the inputs
// as well as an event handler to update either input.

export function ControlInputs() {
  const { state, tracker } = useControlInputs();

  return (
    <div>
      <input type="username" onChange={tracker} />
      <input type="password" onChange={tracker} />
      <p>{state}</p>
    </div>
  );
}
