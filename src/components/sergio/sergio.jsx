import "./sergio.css";
import React from "react";
import js from "../../assets/img/Unofficial_JavaScript_logo_2.svg.png";
import html from "../../assets/img/icons8-html.svg";
import css from "../../assets/img/icons8-css.svg";
import reactLogo from "../../assets/img/icons8-reaccionar.svg";
import node from "../../assets/img/icons8-nodo-js-32.png";
import post from "../../assets/img/icons8-postgresql-100.png";

function Sergio() {
  return (
    <section className="sergioSection">
      <div className="segioContainer">
        <div className="nameContainer">
          <span className="name">Sergio</span>
          <span className="lastName">Vélez</span>
        </div>
        <div className="frase">
          <span>En busqueda de mi mejor versión</span>
        </div>
        <div className="logos">
          <img src={html} alt="" className="html" />
          <img src={css} alt="" className="css" />
          <img src={js} alt="" className="js" />
          <img src={reactLogo} alt="" className="reactLogo" />
          <img src={node} alt="" className="node" />
          <img src={post} alt="" className="post" />
        </div>
        <div className="bienvenido">
          <span>BIENVENIDO A MI PORTFOLIO COMO FULL STACK WEB DEVELOPER</span>
        </div>
        <div className="cv">
          <button className="buttonCv">
            <span>Descarga CV</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Sergio;
