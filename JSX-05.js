/*Write a function that receives two parameters, `a` and `b` and returns the sum of them within an `h2` tag.*/
const sum = (a, b) => a + b;
export class Sum extends React.Component {
  render() {
    return <h2>The result is {sum(1, 2)}</h2>;
  }
}
