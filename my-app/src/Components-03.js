//Write a class component called `App` that renders the `Hello` component within a `div` tag.
import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Hello } from "./Component-02";

import { Welcome } from "./Props-01";
export class App extends React.Component {
  render() {
    return (
      <div>
        <ClickCounter />
        <Hello />
        <Welcome name="Daniele" age={33} />
      </div>
    );
  }
}
