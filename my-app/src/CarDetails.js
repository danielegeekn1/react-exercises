//Create a CarDetails uncontrolled form that uses the HTML Form API
//to allow the user to insert details about a car, such as the model, the year and the color.
//Allow the form to receive a initialData prop that contains the default values of each input,
//and reset the form every time the initialData value changes.

const CarDetail = ({ initialValue }) => {
  return (
    <form action="" method="POST">
      <input type="text" id="model" name="model" />
      <label htmlFor="model">Car model</label>
      <input type="text" id="year" name="year" />
      <label htmlFor="year">Car year</label>
      <input type="text" id="color" name="color" />
      <label htmlFor="color">Car color</label>
    </form>
  );
};

export default CarDetail;
