import React from "react";
export class CounterDisplay extends React.Component {
  state = {
    count: this.props.count,
  };
  render() {
    return <h1>{this.state.count}</h1>;
  }
}
