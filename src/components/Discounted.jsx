import React from "react";
import { books } from "../data"; // Importing the books data
import Book from "./book"; // Importing the Book component

function Discounted() {
  return (
    <div>
      {/* Section for displaying discounted books */}
      <section id="recent">
        <div className="container">
          <div className="row">
            {/* Section title */}
            <h2 className="section__title">
              Discount <span className="purple">Books</span>
            </h2>
            <div className="books">
              {/* Filtering books with a sale price and mapping them to Book components */}
              {books
                .filter((book) => book.salePrice) // Only include books with a sale price
                .map((book) => (
                  <Book key={book.id} book={book} /> // Render each book using the Book component
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Discounted; // Exporting the Discounted component
