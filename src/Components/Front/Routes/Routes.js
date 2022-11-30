import React from "react";
import Product from "../Products/Product";
import Signup from "../Signup/Signup";
import { Route, Routes } from "react-router-dom";
const Routers = ({ productItems }) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
          element={<Product productItems={productItems} />}
        />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Routers;
