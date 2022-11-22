import React from "react";
export class CounterButton extends React.Component {
  state = {
    count: this.props.initialValue,
  };
  handleCounter = (e) => {
    console.log(e);
    this.setState((state) => {
      return {
        count: state.count + this.props.incrementsBy,
      };
    });
  };
  render() {
    this.props.render({ handleCount: this.handleCounter });

    return <button onClick={this.handleCounter}></button>;
  }
}
//Extract the button within a new component called CounterButton and render it within the ClickCounter component.
// How can you pass the onClick event handler to the CounterButton component?
