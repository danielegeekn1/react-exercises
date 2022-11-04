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
