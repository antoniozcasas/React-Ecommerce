import React from "react";
import { Link } from "react-router-dom";
import EmptyCart from "../assets/empty_cart.svg";

// The Cart component displays the shopping cart, including items, their quantities, and the total price.
// It also provides functionality to update quantities, remove items, and proceed to checkout.
const Cart = ({ cart, changeQuantity, removeItem, totals }) => {
  // Helper function to calculate the subtotal for a single item.
  const calculateSubtotal = (item) => {
    return (item.salePrice || item.originalPrice) * item.quantity;
  };

  // Calculate the total price of all items in the cart.
  const total = cart.reduce((sum, item) => sum + calculateSubtotal(item), 0);

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              {/* Header row for the cart table */}
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {/* Render each item in the cart */}
                {cart.map((item) => {
                  const itemPrice = item.salePrice || item.originalPrice;
                  return (
                    <div className="cart__item" key={item.id}>
                      <div className="cart__book">
                        {/* Display book image and details */}
                        <img
                          className="cart__book--img"
                          src={item.url}
                          alt=""
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {item.title}
                          </span>
                          <span className="cart__book--price">
                            ${itemPrice.toFixed(2)}
                          </span>
                          {/* Button to remove the item from the cart */}
                          <button
                            className="cart__book--remove"
                            onClick={() => removeItem(item)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        {/* Buttons and input to adjust item quantity */}
                        <button
                          onClick={() =>
                            changeQuantity(item, item.quantity - 1)
                          }
                        ></button>
                        <input
                          type="number"
                          className="cart__input"
                          min={0}
                          max={99}
                          value={item.quantity}
                          onChange={(event) =>
                            changeQuantity(item, event.target.value)
                          }
                        />
                        <button
                          onClick={() =>
                            changeQuantity(item, item.quantity + 1)
                          }
                        ></button>
                      </div>
                      <div className="cart__total">
                        {/* Display the total price for this item */}
                        ${(itemPrice * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
                {/* Display a message if the cart is empty */}
                {(!cart || !cart.length) && (
                  <div className="cart__empty">
                    <img className="cart__empty--img" src={EmptyCart} alt="" />
                    <h2>You don't have any books in your cart!</h2>
                    <Link to="/books">
                      <button className="btn">Browse books</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {/* Display the subtotal, tax, and total price if the cart is not empty */}
            {cart && cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${totals.subtotal.toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${totals.tax.toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${totals.total.toFixed(2)}</span>
                </div>
                {/* Checkout button (currently non-functional) */}
                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() => alert(`Haven't got around to doing this :(`)}
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
