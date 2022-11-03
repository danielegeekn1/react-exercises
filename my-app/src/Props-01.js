//Create a `Welcome` class component that receives a `name` prop and renders the `Welcome, {name}!` message within a `p` tag. Render this component to you `App` component, passing it a `name` prop of your choosing.
import React from "react";
import { Age } from "./Age";
export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome {this.props.name}</p>
        <p>Your age is {this.props.age}</p>
        {Age.props.age > 18 && <Age age={33} />}
        {Age.props.age && <Age />}
        {Age.props.age > 18 && Age.props.age < 65 && <Age />}
        {Age.props.age > 18 && Age.props.age < 65 && Age.props.name && <Age />}
      </div>
    );
  }
}
//Modify the `Welcome` component so that it receives a second prop called `age` and renders it below the 'welcome' message, within a `p` tag after the message `"Your age is "`.
//Conditional Rendering 01

//Modify the `Welcome` component so that the `Age` component is rendered only if the `age` prop is greater than `18`.

//Conditional Rendering 02

//Modify the `Welcome` component so that the `Age` component is rendered only if the `age` prop is present.

//Conditional Rendering 03

//Modify the `Welcome` component so that the `Age` component is rendered only if the `age` prop is greater than `18` and less than `65`.

//Conditional Rendering 04

//Modify the `Welcome` component so that the `Age` component is rendered only if the `age` prop is greater than `18` and less than `65` and the `name` prop is equal to "John".
