//Write a class component called `App` that renders the `Hello` component within a `div` tag.
import React from "react";
import { Color } from "./Color";
import { Hello } from "./Component-02";
import { Welcome } from "./Props-01";
const items = ["red", "white", "red", "black"];
export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="Daniele" age={33} />
        <Color items={items} />
      </div>
    );
  }
}
