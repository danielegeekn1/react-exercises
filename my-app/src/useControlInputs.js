import { useState } from "react";

export function useControlInputs() {
  const [state, setState] = useState(null);
  const trackState = (e) => {
    const { value } = e.target;
    setState(value);
  };
  return {
    state,
    tracker: trackState,
  };
}
