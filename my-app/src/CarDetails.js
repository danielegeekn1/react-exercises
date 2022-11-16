//Create a CarDetails uncontrolled form that uses the HTML Form API
//to allow the user to insert details about a car, such as the model, the year and the color.
//Allow the form to receive a initialData prop that contains the default values of each input,
//and reset the form every time the initialData value changes.

import { useRef } from "react";

const CarDetail = ({
  initialValue = {
    model: "audi",
    year: 2022,
    color: "blue",
  },
}) => {
  const form = useRef(null);
  const handleForm = (e) => {
    e.preventDefault();
    const model = e.target.elements.model.value;
    const year = e.target.elements.year.value;
    const color = e.target.elements.color.value;
    console.log({ model, year, color });
  };
  /*
  const resetValue = (e) => {
    const { model, year, color } = initialValue;
    if (form.current.value !== model) {
      form.current.value = e.target.elements.model.value;
    } else if (form.current.value !== year) {
      form.current.value = e.target.elements.year.value;
    } else if (form.current.value !== color) {
      form.current.value = e.target.elements.color.value;
    }
  };
  */
  const resetModel = () => {
    if (form.current.value !== initialValue.model) {
      const modelValue = (form.current.value = "");
      console.log(modelValue);
    }
  };
  const resetYear = () => {
    if (form.current.value !== initialValue.year) {
      const yearValue = (form.current.value = "");
      console.log(yearValue);
    }
  };
  const resetColor = () => {
    if (form.current.value !== initialValue.color) {
      const colorValue = (form.current.value = "");
      console.log(colorValue);
    }
  };

  return (
    <form onSubmit={handleForm}>
      <input
        ref={form}
        type="text"
        id="model"
        name="model"
        defaultValue={initialValue.model}
        onChange={resetModel}
      />
      <label htmlFor="model">Car model</label>

      <input
        ref={form}
        type="text"
        id="year"
        name="year"
        defaultValue={initialValue.year}
        onChange={resetYear}
      />
      <label htmlFor="year">Car year</label>

      <input
        ref={form}
        type="text"
        id="color"
        name="color"
        defaultValue={initialValue.color}
        onChange={resetColor}
      />
      <label htmlFor="color">Car color</label>

      <button>Submit button</button>
    </form>
  );
};

export default CarDetail;
