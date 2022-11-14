//Write a class component called `App` that renders the `Hello` component within a `div` tag.
import React from "react";
import { ClickTracker } from "./ClickTracker";
import { Color } from "./Color";
import { Hello } from "./Component-02";
import { Welcome } from "./Props-01";
import { TodoList } from "./TodoList";
const items = [
  { id: 1, name: "green" },
  {
    id: 2,
    name: "red",
  },
  {
    id: 3,
    name: "white",
  },
  {
    id: 4,
    name: "blue",
  },
];

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="Daniele" age={33} />
        <Color items={items} />
        <ClickTracker />
        <TodoList />
      </div>
    );
  }
}
