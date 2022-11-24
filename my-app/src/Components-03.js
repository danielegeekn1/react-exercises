//Write a class component called `App` that renders the `Hello` component within a `div` tag.
import React from "react";

import { Counter } from "./Counter";
import { CounterDisplay } from "./CounterDisplay";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Counter initialValue={0} incrementor={1} timeout={1000} />
      </div>
    );
  }
}
