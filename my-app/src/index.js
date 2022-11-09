import ReactDom from "react-dom";

import { Root } from "./Root";
//import "./Index.css";
//Create a new `index.js` file within the `src` folder and render the `App` component using the `ReactDOM.render` method.
const root = document.querySelector("#root");

ReactDom.render(<Root />, root);
