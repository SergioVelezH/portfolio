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
            className="sergioButton"
            onClick={() => scrollToSection("sergio")}
          >
            Sergio Vélez
          </button>
          
          <div className="divButtons">
          <button
            className="navButton"
            onClick={() => scrollToSection("projects")}
          >
            Proyectos
          </button>
          <button
            className="navButton"
            onClick={() => scrollToSection("skills")}
          >
            Habilidades
          </button>
          <button
            className="navButton"
            onClick={() => scrollToSection("contact")}
          >
            Contacto
          </button>

          </div>
          
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
