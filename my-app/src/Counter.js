//import React, { useEffect, useState } from "react";
import React from "react";
import { CounterDisplay } from "./CounterDisplay";
import { useCounter } from "./UseCounter";
/*
export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  componentDidMount() {
    this.CounterCount = setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementor,
        };
      });
    }, this.props.timeout);
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <CounterDisplay
          style={{
            color: "blue",
          }}
        />
      </div>
    );
  }
}
*/

export function Counter() {
  const { count, onIncrement, onDecrement, onReset } = useCounter();

  return (
    <div>
      <CounterDisplay
        style={{
          color: "blue",
        }}
      />
      <h2>Counter:{count}</h2>
      <button onClick={onIncrement}>Incrementor</button>
      <button onClick={onDecrement}>Decrementor</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

//State 01

//Create a `Counter` class component with an internal state containing a `count` property, initialized to `0`. The `Counter` component should render the `count` property within an `h1` tag, and the `count` property should be incremented by `1` every second;
//State 03

//Modify the `Counter` component so that the initial value of the counter, the increment interval and the increment amount are passed as props to the component.

//State 04

//Extract the `h1` tag showing the `count` state variable into a new component called `CounterDisplay` and render it within the `Counter` component, passing it the `count` state variable as a prop.

//Component Lifecycle 01

//Modify the `Counter` component so that the interval is initialized within the `componentDidMount` life cycle method instead of the constructor. Is the constructor still required?
//answer- the constructor is not mandatory but recommended whenever the components are needed to be already rendered in the DOM

//Modify the `Counter` component from 7.1 by styling the counter display using an inline `style` attribute.

// i didn't catch wether i should add th style directly to counterdisplay or in the element witihin it, so i did both