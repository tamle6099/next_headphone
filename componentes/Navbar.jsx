import React from "react";
import Link from "next/link";
import Cart from "./Cart";
import { useStateContext } from "../starecontext/StateContext";

function Navbar() {
  const { showCart, setShowCart, toalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p>
        <Link href="/">Headphones</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        Shop
        <span className="cart-item-qty">{toalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
}

export default Navbar;
