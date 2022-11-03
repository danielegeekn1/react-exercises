//What happens if no `name` prop is passed to the `Welcome` component? Can you set a default value for the `name` prop?
//Yes i could pass a default value for a prop, in this case, wether i am not putting a value withing the component I am passing, React will catch the data from the default value you set

//of course in this case you have to set the prop value to the default value in this way as i write below
/*import React from "react";
export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: this.props.Name,
      lastName: this.props.LastName,
      age: this.props.age,
    };
  }
  render() {
    return (
      <h1>
        I am {this.state.Name} {this.state.lastName} and I am {this.state.age}{" "}
        years old
      </h1>
    );
  }
}
Welcome.defaultProps = {
  Name: 1000,
  LastName: 0,
  age: 1,
};
*/
