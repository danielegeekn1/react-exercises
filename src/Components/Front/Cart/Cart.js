import React from "react";

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct }) => {
  return (
    <div className="cart-items">
      <div className="cart-items-header"> Cart items</div>
      {cartItems.length === 0 && (
        <div className="cart-items-empty">No Items are added in the cart</div>
      )}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-items-name">{item.name}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart-items-price">
              {item.quantity}*{item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
