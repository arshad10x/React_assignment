import React, { useState } from "react";
import NavBar from "./NavBar";
import Product from "./Product";

function CartItem() {
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToCart = () => {
    setCartItemCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <NavBar cartItemCount={cartItemCount} />
      <Product handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default CartItem;
