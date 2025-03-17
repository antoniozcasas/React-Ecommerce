import React from 'react'

// The Price component displays the price of a book.
// Props:
// - salePrice: The discounted price of the book (optional).
// - originalPrice: The original price of the book (default is 0).
const Price = ({ salePrice = null, originalPrice = 0 }) => {
  return (
    <div className="book__price">
      {/* If a sale price exists, display both the original and sale prices */}
      {salePrice ? (
        <>
          {/* Original price is displayed with a normal style (e.g., strikethrough or muted) */}
          <span className="book__price--normal">
            ${originalPrice.toFixed(2)} {/* Format price to 2 decimal places */}
          </span>
          {/* Sale price is displayed prominently to highlight the discount */}
          ${salePrice.toFixed(2)}
        </>
      ) : (
        // If no sale price exists, display only the original price
        <>${originalPrice.toFixed(2)}</>
      )}
    </div>
  )
}

export default Price
