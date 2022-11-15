import { combineReducers, createStore } from "redux";
import { counterReducer } from "./CounterState";
import { todosReducer } from "./TodosReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  users: todosReducer,
});
export const store = createStore(rootReducer);
