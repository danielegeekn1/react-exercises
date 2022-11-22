import React from "react";
import { CounterButton } from "./CounterButton";
export class ClickCounter extends React.Comonent {
  render() {
    return (
      <CounterButton
        initialValue={0}
        incrementsBy={1}
        render={({ handleCount }) => (
          <button onClick={handleCount}>handleCount button</button>
        )}
      />
    );
  }
}
//Extract the button within a new component called CounterButton
//and render it within the ClickCounter component. How can you pass the onClick event handler to the CounterButton component?
