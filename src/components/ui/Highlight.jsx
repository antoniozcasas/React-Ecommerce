import React from "react";

// Highlight component displays an icon, a title, and a paragraph.
// Props:
// - icon: JSX element for the icon.
// - title: String for the title text.
// - para: String for the paragraph text.
const Highlight = ({ icon, title, para }) => {
  return (
    <div className="highlight">
      <div className="highlight__img">
        {icon} {/* Render the icon */}
      </div>
      <h3 className="highlight__subtitle">{title}</h3> {/* Render the title */}
      <p className="highlight__para">
        {para} {/* Render the paragraph */}
      </p>
    </div>
  );
};

export default Highlight;