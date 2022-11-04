import React from "react";
export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: "",
    disabled: false,
  };
  handleLoginBtn = (e) => {
    this.setState({});
  };
  handleResetBtn = () => {
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };
  render() {
    return (
      <form>
        <input type="username" value={this.state.username} />
        <input type="password" value={this.state.password} />
        <input type="checkbox" value={this.state.remember} />
        <button onClick={this.handleLoginBtn}></button>
        <button onClick={this.handleResetBtn}></button>
      </form>
    );
  }
}

//forms-02
//Create a Login component containing three inputs:
// a username input, a password input and a remember checkbox.
//All three inputs should be controlled components.

//Forms 03

//Add a "login" `button` to the `Login` component.
//This button should be disabled as long as the `username` and `password` inputs are empty.
//When clicked, the event handler attached to the button should call an `onLogin` function
//passed as a prop to the `Login` component, passing it the state.

//Forms 04

//Add a "reset" `button` to the `Login` component that clears the content of all three inputs when clicked.
