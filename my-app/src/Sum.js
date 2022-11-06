//   14.2 Write a `Sum` function component that receives a `numbers` prop
//(expected to be an array of numbers) and renders the sum of all numbers in the array within a `h1` tag.

//ex function components-03

export function Sum({ number1, number2 }) {
  const sum = [number1 + number2];
  return (
    <div>
      <h1>The result is {sum}</h1>
    </div>
  );
}
