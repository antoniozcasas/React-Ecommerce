import React from 'react'
import { Link } from 'react-router-dom'

// Component to display the "Explore" section
function Explore() {
  return (
    <div>
      {/* Section for exploring more books */}
      <section id="explore">
        <div className="container">
          <div className="row row__column">
            {/* Section title */}
            <h2 className="section__title">
              Explore More <span className="purple">Books</span>
            </h2>
            {/* Link to the books page */}
            <Link to="/books">
              <button className="btn">Explore books</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Explore
