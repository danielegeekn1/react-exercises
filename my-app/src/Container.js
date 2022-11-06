import React from "react";
export class Container extends React.Component {
  state = {
    position: [0, 0],
  };
  handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    this.setState({
      position: [x, y],
    });
  };
  render() {
    return (
      <div className="customStyle" onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state.position)}
      </div>
    );
  }
}

//Create a `Container` component that renders its children within a `div` tag.
// Have the `div` tag use a white background and a red border
//either with a custom class or by using `tailwindcss`.

// i created a customStyle class in which I added the requested style, not using tailwind but with a custom class
