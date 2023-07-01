import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <div className="brand">
          <Link to="/">Shopping Cart</Link>
        </div>
        <div className="nav-items">
          <Link to="/">HomePage</Link>
          <Link to="/CartPage" className="mycart">
            CartPage
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
