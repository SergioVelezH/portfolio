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
          <button
            className="navButton"
            onClick={() => scrollToSection("sergio")}
          >
            Sergio
          </button>
          <button
            className="navButton"
            onClick={() => scrollToSection("about")}
          >
            Sobre Mi
          </button>
          <button
            className="navButton"
            onClick={() => scrollToSection("projects")}
          >
            Proyectos
          </button>
          <button
            className="navButton"
            onClick={() => scrollToSection("education")}
          >
            Formación
          </button>
          <button
            className="navButton"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <button
            className="navButton"
            onClick={() => scrollToSection("contact")}
          >
            Contacto
          </button>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
