import React from "react";
import { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  _formRef = createRef();
  handleFormSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const remember = e.target.elements.remember.checked;
    console.log({ username, password, remember });
  };
  render() {
    return (
      <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
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
