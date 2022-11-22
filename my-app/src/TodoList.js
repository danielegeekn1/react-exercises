import React, { useState } from "react";
/*
export class TodoList extends React.Component {
  state = {
    username: "",
    value: "",
    items: ["kate", "jane", "george"],
  };
  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };
  addNewItem = () => {
    let { items, input } = this.state;
    items.push(input);
    this.setState({ input });
  };
  resetItems = () => {
    let { items } = this.state;
    items.pop();
    this.setState({ items });
  };
  render() {
    return (
      <div>
        <h1>
          {this.props.children({ ...this.state, reset: this.resetItems })}
        </h1>
        

      
      </div>
    );
  }
}
*/

function TodoList() {
  const [items, setItems] = useState(["kate", "jane", "george"]);
  const saveInput = (e) => {
    setItems({ input: e.target.value });
  };
  const addNewItem = () => {
    let { input } = items;
    items.push(input);
    setItems({ input });
  };
  const resetItems = () => {
    items.pop();
    setItems({ items });
  };
  const resetEverything = () => {
    setItems({
      items: [],
    });
  };
  const removeCurrItem = (index) => {
    items((prev) => {
      return prev.filter((_, i) => i !== index);
    });
  };
  return (
    <div>
      {items.map((item, i) => (
        <ul key={i}>
          <li>{item}</li>
          <button onClick={removeCurrItem}>Remove corrisponding items</button>
        </ul>
      ))}
      <input type="username" onChange={saveInput} />
      <button onClick={addNewItem}>Add value</button>
      <button onClick={resetItems}>Reset values</button>
      <button onClick={resetEverything}>
        Reset items array as default set in state{" "}
      </button>
      {/* <h1>{this.props.children({ ...this.state, reset: this.resetItems })}</h1> */}
    </div>
  );
}

export default TodoList;

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
