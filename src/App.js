import "./index.css"; // Import global styles
import Nav from "./components/Nav"; // Navigation bar component
import Home from "./pages/Home"; // Home page component
import Footer from "./components/Footer"; // Footer component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // React Router for navigation
import { books } from "./data"; // Book data
import Books from "./pages/Books"; // Books listing page
import BookInfo from "./pages/BookInfo"; // Book details page
import Cart from "./pages/Cart"; // Shopping cart page
import { useState } from "react"; // React hook for state management

function App() {
  const [cart, setCart] = useState([]); // State to manage items in the cart

  // Function to add a book to the cart
  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  // Function to change the quantity of a book in the cart
  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity, // Update quantity
            }
          : item
      )
    );
  }

  // Function to remove a book from the cart
  function removeItem(book) {
    setCart(cart.filter((item) => item.id !== book.id));
  }

  // Calculate subtotal, tax, and total for the cart
  const subtotal = cart.reduce(
    (sum, item) => sum + (item.salePrice || item.originalPrice) * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Example: 10% tax
  const total = subtotal + tax;

  // Object to store calculated totals
  const totals = {
    subtotal,
    tax,
    total,
  };

  return (
    <Router>
      <div className="App">
        <Nav cart={cart} /> {/* Navigation bar with cart info */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/books" element={<Books books={books} />} /> {/* Books listing route */}
          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} /> // Book details route
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                books={books}
                cart={cart}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
                totals={totals} // Pass totals to Cart
              />
            }
          />
        </Routes>
        <Footer /> {/* Footer component */}
      </div>
    </Router>
  );
}

export default App; // Export App component as default
