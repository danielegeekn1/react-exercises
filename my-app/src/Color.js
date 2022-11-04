//Lists 01

//Create a `Colors` component that renders a `ul` tag with a `li` tag for each color passed in the `items` prop. The `items` prop should be an array of strings.
import React from "react";

export class Color extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((color) => (
          <li key={color.id}>{color.name}</li>
        ))}
      </ul>
    );
  }
}
//in order to make it work I wrote the items array inside app component
//i passed mycolor component in myapp component ( in components-03), and there i passed my items array whch i cycled in this component here

//Lists 02

//Modify the `Colors` component so that `items` is expected to be an array of objects each containing an `id` and a `name` property. Render the `name` property of each object within a `li` tag, and use the `id` as a key.
