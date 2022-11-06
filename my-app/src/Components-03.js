//Write a class component called `App` that renders the `Hello` component within a `div` tag.
import React from "react";
import { ClickTracker } from "./ClickTracker";
import { Color } from "./Color";
import { Hello } from "./Component-02";
import { Container } from "./Container";
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

const ItemsF = ["billy", "kate", "jane"];
export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="Daniele" age={33} />
        <Color items={items} />
        <ClickTracker />
        <TodoList items={ItemsF} />
        <Container>
          {/*  {(position) => {
            const [x, y] = position;
            return (
              <div>
                The current position is{x},{y}
              </div>
            );
          }}*/}
          {(title) => {
            const [title1, title2] = title;
            return (
              <div>
                The first title is {title1}, while the second one is{title2}
              </div>
            );
          }}
        </Container>
      </div>
    );
  }
}
