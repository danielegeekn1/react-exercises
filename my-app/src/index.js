import ReactDom from "react-dom";
import { App } from "./Components-03";
//import "./Index.css";
//Create a new `index.js` file within the `src` folder and render the `App` component using the `ReactDOM.render` method.
const root = document.querySelector("#root");

ReactDom.render(<App />, root);
