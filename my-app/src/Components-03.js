//Write a class component called `App` that renders the `Hello` component within a `div` tag.
import React from "react";
import { Hello } from "./Component-02";
import { Welcome } from "./Props-01";
import { Age } from "./Age";
export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="Daniele" age={33} />
        <Age age={33} />
        {Age && <Age age={33} />}
      </div>
    );
  }
}
