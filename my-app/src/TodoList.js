import React from "react";
// from "./Components-03";
export class TodoList extends React.Component {
  state = {
    username: "",
    value: "",
  };
  addInputValue = (e) => {
    // const values = e.target.value;
    this.setState({
      //value: this.state.value + values,
      //ItemsF.push(value)
      //value: ItemsF.push(values),
      //value: ItemsF,
    });
  };

  render() {
    return (
      <div>
        {this.props.items.map((item, index) => (
          <li key={item + index}>{item}</li>
        ))}

        <input type="username" value={this.state.username} />
        <button onClick={this.addInputValue}></button>
        <button onClick={this.resetBtn}></button>
      </div>
    );
  }
}

//Lists 03

/*

*/
//Create a `TodoList` component that renders a `ul` tag with a `li` tag for each item contained in the `items` _state variable_.
// The `items` state variable should be an array of strings.
//The `TodoList` component should also contain an `input` tag and a `button`.
//When the `button` is clicked, the event handler should add the value of the `input` tag to the `items` array.

// in order to map through items I pass the items array in app file  as props
//in components 03 file

//Lists 05

//Modify the `TodoList` by adding a "reset" `button` that clears the `items` array when clicked.

//render-props-02
//Change the `TodoList` component so that instead of using the `render` prop it uses the `children` prop.
//How does this affect the component in which the `TodoList` component is rendered?

//render props-01

//Modify the `TodoList` component so that, instead of rendering the `items` array within the `ul` tag,
// it calls the function passed to its `render` prop,
// passing it the `items` array as a parameter, as well as the function required to delete the item.
// Pass a render prop to the `TodoList` component to correctly render and interact with the `items` array.
