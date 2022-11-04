import React from "react";
export class CounterDisplay extends React.Component {
  state = {
    count: this.props.initialValue,
  };
  render() {
    return (
      <h1
        style={{
          color: "red",
          backgroundColor: "lightblue",
        }}
      >
        {this.state.count}
      </h1>
    );
  }
}
