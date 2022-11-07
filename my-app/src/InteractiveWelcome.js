import React from "react";
//import { Welcome } from "./Props-01";
export class InteractiveWelcome extends React.Component {
  state = {
    username: "",
  };
  handleInput = (e) => {
    const newvalues = e.target.value;

    this.setState({
      username: newvalues,
    });
  };

  render() {
    return (
      <form>
        <input
          type="username"
          value={this.state.username}
          onChange={this.handleInput}
        />
        {/* <Welcome value={InteractiveWelcome.this.state.value} /> */}
      </form>
    );
  }
}

//Forms 01

//Create an `InteractiveWelcome` component that renders an `input` tag and the `Welcome` component.
//Pass the current content of the `input` tag to the `name` prop of the `Welcome` component.
//The `input` tag should be a controlled component.
