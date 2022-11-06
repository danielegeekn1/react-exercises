import React from "react";

import { useState } from "react";
/*
export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: "",
    disabled: false,
    ItemsF,
  };
  handleInput = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    this.setState({
      [name]: type === "password",
    });
  };
  /*handleLoginBtn = (e) => {
    this.setState({});
  };
  handleResetBtn = () => {
    this.setState({
     
    });
  };*/
/*
  render() {
    const loginStyle = {
      backgroundColor: this.state.name > 8 ? "red" : "green",
    };
    return (
      <form>
        <input
          type="username"
          value={this.state.username}
          onChange={this.handleInput}
        />
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleInput}
        />
        <input
          type="checkbox"
          value={this.state.remember}
          onChange={this.handleInput}
        />
        <button onClick={this.handleLoginBtn} style={loginStyle}>
          Login Button
        </button>
        <button onClick={this.handleResetBtn}></button>
      </form>
    );
  }
}
*/
export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  function handleInputChange(e) {
    const { name, type, value } = e.target;
    setData((data) => {
      return {
        ...data,
        [name]: type === "password" ?? value,
      };
    });
  }
  function handleReset() {
    setData((data) => {
      return {
        username: "",
        password: "",
        remember: "",
        disabled: false,
      };
    });
  }
  console.log(data);
  return (
    <div>
      {" "}
      <form>
        <input
          onChange={handleInputChange}
          value={data.username}
          name="username"
        />
        <input
          onChange={handleInputChange}
          value={data.password}
          name="password"
          type="password"
        />
        <input
          onChange={handleInputChange}
          value={data.remember}
          type="checkbox"
          name="remember"
        />
      </form>
      <button onClick={handleReset}></button>
    </div>
  );
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

//Modify the `Login` component from 8.3 so that the "login" `button`
//background color is "red" when the inputted password's length is shorter than 8 characters
// green otherwise.

//Rewrite the `Login` component from Forms 03 as a function component,
// and use the `useState` hook to track the state of the `username`, `password` and `remember` inputs.
//Tip: you can use `useState` more than once.
