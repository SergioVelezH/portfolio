import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar({ changeSection }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <section className="navbarSection">
      <div className="navContainer">
        <button className="navButton" onClick={() => scrollToSection("sergio")}>Sergio</button>
        <button className="navButton" onClick={() => scrollToSection("about")}>About me</button>
        <button className="navButton" onClick={() => scrollToSection("education")}>Education</button>
        <button className="navButton" onClick={() => scrollToSection("projects")}>Projects</button>
        <button className="navButton" onClick={() => scrollToSection("skills")}>Skills</button>
        <button className="navButton" onClick={() => scrollToSection("contact")}>Contact</button>
      </div>
      </section>
    </nav>
  );
}

export default Navbar;