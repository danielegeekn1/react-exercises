import React from "react";
import { Welcome } from "./Props-01";
export class InteractiveWelcome extends React.Component {
  state = {
    username: "",
    value: "",
  };
  handleInput = (e) => {
    const newvalues = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: newvalues,
      value: newvalues,
    });
  };

  render() {
    return (
      <form>
        <input type="text" value={this.state.name} />
        <Welcome value={InteractiveWelcome.this.state.value} />
      </form>
    );
  }
}

//Forms 01

//Create an `InteractiveWelcome` component that renders an `input` tag and the `Welcome` component.
//Pass the current content of the `input` tag to the `name` prop of the `Welcome` component.
//The `input` tag should be a controlled component.
