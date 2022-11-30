import React from "react";
import Product from "../Products/Product";
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";
import { Route, Routes } from "react-router-dom";
const Routers = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Product
              productItems={productItems}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route path="/signup" exact element={<Signup />} />
        <Route
          path="/cart"
          exact
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Routers;
