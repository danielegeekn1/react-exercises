//   14.2 Write a `Sum` function component that receives a `numbers` prop
//(expected to be an array of numbers) and renders the sum of all numbers in the array within a `h1` tag.

//ex function components-03

export function Sum({ number1, number2, age = 33 }) {
  const sum = [number1 + number2];
  return (
    <div>
      <h1>The result is {sum}</h1>
      <h2>I am {age} years old</h2>
    </div>
  );
}

//What happens if the numbers prop of the Sum component is not set?
//How can you set a default value for this prop?
