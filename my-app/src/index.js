import ReactDOM from "react-dom/client";
import React from "react";

import { Root } from "./Root";
//import "./Index.css";
//Create a new `index.js` file within the `src` folder and render the `App` component using the `ReactDOM.render` method.
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<Root />);
