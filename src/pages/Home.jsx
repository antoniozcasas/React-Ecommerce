import React from "react";
// Importing individual components that make up the Home page
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Featured from "../components/Featured";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";

// The Home component serves as the main page of the application
function Home() {
  return (
    <>
      {/* Landing section: Displays the main banner or introduction */}
      <Landing />
      {/* Highlights section: Showcases key features or services */}
      <Highlights />
      {/* Featured section: Highlights featured items or content */}
      <Featured />
      {/* Discounted section: Displays items or services on discount */}
      <Discounted />
      {/* Explore section: Encourages users to explore more content */}
      <Explore />
    </>
  );
}

export default Home; // Exporting the Home component for use in the application
