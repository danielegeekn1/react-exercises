import { BrowserRouter } from "react-router-dom";
import { App } from "./Components-03";
export function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
