import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Price from "./ui/Price";
import Rating from "./ui/Rating";

const Book = ({ book }) => {
  // Ref to check if the component is mounted
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      // When the component unmounts
      mountedRef.current = false;
    };
  }, []);

  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img className="book__img" src={book.url} alt={book.title} />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <Price
        originalPrice={book.originalPrice}
        salePrice={book.salePrice}
      />
    </div>
  );
};

export default Book;
