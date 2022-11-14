//Write a class component called `App` that renders the `Hello` component within a `div` tag.
import React from "react";

import { TodoList } from "./TodoList";
// const items = [
//   { id: 1, name: "green" },
//   {
//     id: 2,
//     name: "red",
//   },
//   {
//     id: 3,
//     name: "white",
//   },
//   {
//     id: 4,
//     name: "blue",
//   },
// ];

export class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList
          render={({ items, reset }) => (
            <div>
              <h1>{items}</h1>
              <button onClick={reset}>Reset Items</button>
            </div>
          )}
        />
      </div>
    );
  }
}
