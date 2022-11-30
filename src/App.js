import React from "react";
import data from "./Components/Back/Data/Data";
import Header from "./Components/Front/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Components/Front/Routes/Routes";

const App = () => {
  const { productItems } = data;
  return (
    <div>
      <Router>
        <Header />
        <Routers productItems={productItems} />
      </Router>
    </div>
  );
};

export default App;
