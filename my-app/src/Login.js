import React from "react";
export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: "",
  };

  render() {
    return (
      <form>
        <input type="username" value={this.state.username} />
        <input type="password" value={this.state.password} />
        <input type="checkbox" value={this.state.remember} />
      </form>
    );
  }
}

//forms-02
//Create a Login component containing three inputs:
// a username input, a password input and a remember checkbox.
//All three inputs should be controlled components.
