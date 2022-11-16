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

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
          <input type="username" onChange={this.saveInput} />
          <button onClick={this.addNewItem}>Add value</button>
        </ul>
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
