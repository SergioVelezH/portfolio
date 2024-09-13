import React from "react";
import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Sergio from "./components/sergio/sergio";
import About from "./components/about/about";
import Education from "./components/education/education";
import Proyects from "./components/proyects/proyects";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";


function App() {
  return (
    <div>
      <Navbar />
      <div id="sergio">
        <Sergio />
      </div>
      <div id="projects">
        <Proyects />
      </div>
      <div id="about">
        <About />
      </div>
      {/* <div id="education">
        <Education />
      </div> */}
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
