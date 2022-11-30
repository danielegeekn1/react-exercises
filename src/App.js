import React, { useState } from "react";
import data from "./Components/Back/Data/Data";
import Header from "./Components/Front/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Components/Front/Routes/Routes";

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleCartClearace = () => {
    setCartItems([]);
  };
  return (
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <Routers
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearace}
        />
      </Router>
    </div>
  );
};

export default App;
