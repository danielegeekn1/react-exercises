//Lists 01

//Create a `Colors` component that renders a `ul` tag with a `li` tag for each color passed in the `items` prop. The `items` prop should be an array of strings.
import React from "react";

export class Color extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((color, index) => (
          <li key={color + index}>{color}</li>
        ))}
      </ul>
    );
  }
}
//in order to make it work I wrote the items array inside app component
//i passed mycolor component in myapp component ( in components-03), and there i passed my items array whch i cycled in this component here
