//Create a CarDetails uncontrolled form that uses the HTML Form API
//to allow the user to insert details about a car, such as the model, the year and the color.
//Allow the form to receive a initialData prop that contains the default values of each input,
//and reset the form every time the initialData value changes.

import { useRef } from "react";

const CarDetail = ({ initialValue }) => {
  const form = useRef();
  const handleForm = (e) => {
    e.preventDefault();
    const model = e.target.elements.model.value;
    const year = e.target.elements.year.value;
    const color = e.target.elements.color.value;
    console.log({ model, year, color });
  };
  return (
    <form value={form} onSubmit={handleForm}>
      <input type="text" id="model" name="model" />
      <label htmlFor="model">Car model</label>

      <input type="text" id="year" name="year" />
      <label htmlFor="year">Car year</label>

      <input type="text" id="color" name="color" />
      <label htmlFor="color">Car color</label>

      <button>Submit button</button>
    </form>
  );
};

export default CarDetail;
