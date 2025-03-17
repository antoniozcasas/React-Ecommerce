import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg"; // Importing an SVG image for the landing page illustration
import { Link } from "react-router-dom"; // Importing Link for navigation between routes

// Landing component serves as the homepage of the library platform
const Landing = () => {
    return (
        <section id="landing"> {/* Main section for the landing page */}
            <header>
                <div className="header__container"> {/* Container for header content */}
                    <div className="header__description"> {/* Textual description of the platform */}
                        <h1>America's most awarded online library platform</h1> {/* Main heading */}
                        <h2>Find your dream book with <span className="purple">Library</span></h2> {/* Subheading with highlighted text */}
                        <Link to="/books"> {/* Link to navigate to the books page */}
                            <button className="btn">Browse Books</button> {/* Button to browse books */}
                        </Link>
                    </div>
                    <figure className="header__img--wrapper"> {/* Wrapper for the header image */}
                        <img src={UndrawBooks} alt="" /> {/* Displaying the imported SVG image */}
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing; // Exporting the Landing component for use in other parts of the application