import React from "react";
import Product from "../Products/Product";
import { Route, Routes } from "react-router-dom";
const Routers = ({ productItems }) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
          element={<Product productItems={productItems} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Routers;
