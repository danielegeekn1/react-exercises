/*Create a new React Project.

Create a variable called `hello` and inizialize it with an `h1` tag with the message `"Hello, World!"`.*/
import React from "react";

const hello = "world";
export class Hello extends React.Component {
  render() {
    return <h1>Hello {hello}</h1>;
  }
}
