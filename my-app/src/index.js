import ReactDom from "react-dom";
import { Root } from "./Root";
import {
  decrementCounter,
  incrementCounter,
  reset,
} from "./state/CounterState";
import { store } from "./state/Store";
import { addUser, editUser, resetUsers } from "./state/TodosReducer";

//import "./Index.css";
//Create a new `index.js` file within the `src` folder and render the `App` component using the `ReactDOM.render` method.
const root = document.querySelector("#root");
//dispatching actions on our store
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incrementCounter(5));
store.dispatch(decrementCounter(3));
store.dispatch(reset(3));

store.dispatch(addUser({ id: 1, name: "giulia", age: 37 }));
store.dispatch(addUser({ id: 2, name: "josephine", age: 33 }));
store.dispatch(editUser(1, { age: 33 }));
store.dispatch(resetUsers());

ReactDom.render(<Root />, root);
