import React from "react";
export class ClickTracker extends React.Component {
  state = {
    username: "",
  };
  handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    //const type = e.target.type;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <button
          name="username"
          value={this.state.username}
          type="submit"
          onClick={this.handleInput}
        >
          Submit
        </button>
        <button
          name="username"
          value={this.state.username}
          type="button"
          onClick={this.handleInput}
        >
          Button
        </button>
        <button
          name="username"
          value={this.state.username}
          type="reset"
          onClick={this.handleInput}
        >
          Reset
        </button>
      </div>
    );
  }
}

//events-03 ex
//Create a ClickTracker component that renders three buttons.
//Implement a single event handler for all three buttons
// and track of which button was pressed last.
//Show the last button that was pressed in an h1 tag within the ClickTracker component.
//Tip: you can use the event object to access the target property of the event.
