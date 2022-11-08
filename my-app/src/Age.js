//Extract the `"Your age is "` message into a new component called `Age` and render it within the `Welcome` component. Pass to the `Age` component the `age` prop that `Welcome` is receiving from the `App` component.
import React from "react";
export class Age extends React.Component {
  render() {
    return (
      <div>
        <p>Your age is {this.props.age}</p>
        {this.props.age > 18 ? (
          <p>your age is {this.props.age}</p>
        ) : (
          <p>You are too young</p>
        )}
      </div>
    );
  }
}

/*
{Age.props.age > 18 ? (
          <p>Your age is {age}</p>
        ) : (
          <p>You are very strong</p>
        )}
        {Age.props.age > 18 && <Age age={33} />}
        {Age.props.age && <Age />}
        {Age.props.age > 18 && Age.props.age < 65 && <Age age={33} />}
        {Age.props.age > 18 &&
          Age.props.age < 65 &&
          Age.props.name === "john" && <Age age={33} name="john" />}
*/
