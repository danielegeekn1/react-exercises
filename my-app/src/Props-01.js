//Create a `Welcome` class component that receives a `name` prop and renders the `Welcome, {name}!` message within a `p` tag. Render this component to you `App` component, passing it a `name` prop of your choosing.
import React from "react";
import { Age } from "./Age";
//import { Age } from "./Age";
/*
export class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <p>Welcome {this.props.name}</p>
      </div>
    );
  }
}
*/
export function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome {name}</p>
      <p>Your age is {age}</p>
      <Age name="daniele" />
    </div>
  );
}
//Modif the `Welcome` component so that it receives a second prop called `age` and renders it below the 'welcome' message, within a `p` tag after the message `"Your age is "`.
//Conditional Rendering 01

//Modify the `Welcome` component so that the `Age` component is rendered only if the `age` prop is greater than `18`.

//Conditional Rendering 02

//Modify the `Welcome` component so that the `Age` component is rendered only if the `age` prop is present.

//Conditional Rendering 03

//Modify the `Welcome` component so that the `Age` component is rendered only if the `age` prop is greater than `18` and less than `65`.

//Conditional Rendering 04

//Modify the `Welcome` component so that the `Age` component is rendered only if the `age` prop is greater than `18` and less than `65` and the `name` prop is equal to "John".

//Conditional Rendering 05

//Modify the `Age` component so that the `"Your age is "` message is rendered only if the `age` prop is greater than `18`. Otherwise render the `"You are very young!"` message.

//Rewrite the Welcome component to be a function component.

//ps i kept the same prop age when refered to other components passed within the welcome component
