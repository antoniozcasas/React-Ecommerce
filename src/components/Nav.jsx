import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Library.svg";
import { Link } from "react-router-dom";

// Navigation component that includes links, a menu toggle, and a dynamic cart icon
const Nav = ({ cart }) => {
  // Function to open the mobile menu by adding a CSS class
  function openMenu() {
    document.body.classList += "menu--open";
  }

  // Function to close the mobile menu by removing a CSS class
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  // Calculate the total number of items in the cart
  const cartLength = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav>
      <div className="nav__container">
        {/* Logo linking to the home page */}
        <Link to="/">
          <img src={LibraryLogo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          {/* Navigation link to the home page */}
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          {/* Navigation link to the books page */}
          <li className="nav__list">
            <Link to="/books" className="nav__link">
              Books
            </Link>
          </li>
          {/* Button to open the mobile menu */}
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
          {/* Cart icon with dynamic item count */}
          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
            <span className="cart__length">{cartLength}</span> {/* Dynamic cart length */}
          </li>
        </ul>
        {/* Mobile menu backdrop and links */}
        <div className="menu__backdrop">
          {/* Button to close the mobile menu */}
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            {/* Mobile menu link to the home page */}
            <li className="menu__list">
              <Link to="/" className="menu__link">
                Home
              </Link>
            </li>
            {/* Mobile menu link to the books page */}
            <li className="menu__list">
              <Link to="/books" className="menu__link">
                Books
              </Link>
            </li>
            {/* Mobile menu link to the cart page */}
            <li className="menu__list">
              <Link to="/cart" className="menu__link">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
