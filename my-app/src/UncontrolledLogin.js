import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  _formRef = createRef();
  render() {
    return (
      <form ref={this._formRef}>
        <input type="username" />
        <input type="password" />
        <input type="checkbox" />
      </form>
    );
  }
}

//Forms 05

//Implement an `UncontrolledLogin` component that implements all the operations of the `Login` component
//but does so using uncontrolled components.

//Forms 06

//Modify the `UncontrolledLogin` component so that the `username` input is automatically focused when the compnent renders the first time.
