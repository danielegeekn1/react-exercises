import React from "react";
export class ClickTracker extends React.Component {
  state = {
    count: "",
  };
  handleTracker = (e) => {
    this.setState({
      count: e.target.innerHTML,
    });
  };
  render() {
    return (
      <div>
        <h1>The last clicked button is :{this.state.count}</h1>
        <button onClick={this.handleTracker}>button1</button>
        <button onClick={this.handleTracker}>button2</button>
        <button onClick={this.handleTracker}>button3</button>
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
