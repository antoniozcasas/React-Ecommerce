import React from 'react'
// Importing the logo image for the footer
import Logo from "../assets/Library.svg"
// Importing Link from react-router-dom for navigation
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="container">
          <div className="row row__column">
            {/* Logo section with a link to the homepage */}
            <Link to="/">
            <figure className="footer__logo">
                <img src={Logo} alt="" className="footer__logo--img" />
            </figure>
            </Link>
            {/* Navigation links in the footer */}
            <div className="footer__list">
              <Link to="/" className="footer__link">Home</Link>
              <span className="footer__link no-cursor">About</span>
              <Link to="/books" className="footer__link">Books</Link>
              <Link to="/cart" className="footer__link">Cart</Link>
            </div>
            {/* Copyright information */}
            <div className="footer__copyright">
              Copyright &copy; 2025 Library
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer
