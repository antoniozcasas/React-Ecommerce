import React from "react";
import Book from "./book"; // Importing the Book component to display individual books
import {books} from "../data"; // Importing the books data

const Featured = () => {
  // The Featured component displays a section of featured books with a rating of 5

  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span> {/* Section title */}
          </h2>
          <div className="books">
            {books
            .filter((book) => book.rating === 5) // Filter books with a rating of 5
            .slice(0, 4) // Limit to the first 4 books
            .map((book) => (
                <Book key={book.id} book={book} /> // Render each book using the Book component
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured; // Exporting the Featured component for use in other parts of the app
