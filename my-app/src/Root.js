import { App } from "./Components-03";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
const fetcher = (url) => {
  fetch(url).then((resp) => resp.json());
};
export function Root() {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SWRConfig>
  );
}
