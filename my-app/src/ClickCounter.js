import React from "react";
import { CounterButton } from "./CounterButton";
export class ClickCounter extends React.Comonent {
  state = {
    count: this.props.initialValue,
  };
  handleCounter = (e) => {
    console.log(e);
    this.setState((state) => {
      return {
        count: state.count + this.props.incrementsBy,
      };
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleCounter}></button>
        <CounterButton />
      </div>
    );
  }
}
//Create a ClickCounter class component that increments a counter every time a user clicks on a button. Render both the current value of the counter and the button within the ClickCounter component.
