import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/book";

const BookInfo = ({ books, addToCart, cart }) => {
  // Extract the book ID from the URL parameters
  const { id } = useParams();

  // Find the book in the list of books using the extracted ID
  const book = books.find((book) => +book.id === +id);

  // Function to add the selected book to the cart
  function addBookToCart(book) {
    addToCart(book);
  }

  // Check if the book already exists in the cart
  function bookExistsInCart() {
    return cart.find(book => book.id === +id);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            {/* Navigation links to go back to the books list */}
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/book" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              {/* Display the selected book's image */}
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                {/* Display the book's title */}
                <h2 className="book__selected--title">{book.title}</h2>
                {/* Display the book's rating */}
                <Rating rating={book.rating} />
                {/* Display the book's price */}
                <div className="book__selected--price">
                  <Price
                    salePrice={book.salePrice}
                    originalPrice={book.originalPrice}
                  />
                </div>
                {/* Display the book's summary */}
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Esse blanditiis facere veritatis laborum voluptate quibusdam
                    cumque eum nihil doloremque quisquam architecto tempora
                    consequatur fugiat magni, natus, ea aut sint quae.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Totam, voluptate! Eum incidunt eligendi, deserunt nulla
                    porro aperiam dolor similique odit laboriosam dolores, illum
                    fuga veritatis quod corporis commodi vel. Nihil.
                  </p>
                </div>
                {/* Conditionally render the "Add to Cart" or "Checkout" button */}
                {bookExistsInCart() ? (
                  <Link to={`/cart`} className="Book__link">  
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            {/* Section for displaying recommended books */}
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {/* Filter and display books with a 5-star rating, excluding the current book */}
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book key={book.id} book={book} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
