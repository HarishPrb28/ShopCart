import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>Shopping Cart</li>
        <li>
          <link to="/HomePage"> Home Page</link>
        </li>
        <li>
          <link to="/CartPage"> Cart Page</link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
