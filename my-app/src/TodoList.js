import React from "react";

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
        {/* <ul>
          {this.state.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))} 
          <input type="username" onChange={this.saveInput} />
          <button onClick={this.addNewItem}>Add value</button>
          <button onClick={this.resetItems}>Reset values</button>
        </ul>*/}
      </div>
    );
  }
}

//Lists 03

//Create a `TodoList` component that renders a `ul` tag with a `li` tag for each item contained in the `items` _state variable_.
// The `items` state variable should be an array of strings.
//The `TodoList` component should also contain an `input` tag and a `button`.
//When the `button` is clicked, the event handler should add the value of the `input` tag to the `items` array.

// in order to map through items I pass the items array in app file  as props
//in components 03 file

//render-props-01
//Modify the TodoList component so that, instead of rendering the items array within the ul tag,
//it calls the function passed to its render prop, passing it the items array as a parameter, as well as the function required to delete the item. Pass a render prop to the TodoList
//component to correctly render and interact with the items array.

//i passed the todolist component within the app component, passing to it the render props as wrote here above in todo list
//so as required, the items array, and the reset function
