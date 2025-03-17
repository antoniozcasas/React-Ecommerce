import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
      {/* Create an array of 5 elements to represent the 5-star rating system */}
      {[...Array(5)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          // Determine the icon type based on the current index and rating value
          icon={
            index < Math.floor(rating) // Full star for indices less than the integer part of the rating
              ? "star"
              : index < rating // Half star for indices less than the rating but greater than or equal to the integer part
              ? "star-half-alt"
              : ["far", "star"] // Empty star for remaining indices
          }
          className="book__ratings--star" // Apply CSS class for styling the star
        />
      ))}
    </div>
  );
};

export default Rating;
