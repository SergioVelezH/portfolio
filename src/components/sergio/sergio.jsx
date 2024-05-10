import "./sergio.css";
import React from "react";
import js from "../../assets/img/icons8-javascript-96.png";
import html from "../../assets/img/icons8-html5-96.png";
import css from "../../assets/img/icons8-css.svg";
import reactLogo from "../../assets/img/icons8-reaccionar-80.png";
import node from "../../assets/img/icons8-nodo-js.svg";
import post from "../../assets/img/icons8-postgresql-100.png";
import cvFile from "../../assets/cv/SergioVelezCV.pdf";
import perfil from "../../assets/img/fotoperfil.jpg";


function Sergio() {
  return (
    <section className="sergioSection">
      <div className="fotoCvContainer">
        <div className="cv">
          <a href={cvFile} download="SergioVelezCV.pdf">
            <button className="buttonCv">
              <span>Descargar Curriculum</span>
            </button>
          </a>
        </div>
        <div className="perfilContainer">
          <img src={perfil} alt="" className="perfilFoto" />
        </div>
      </div>
      <div className="segioContainer">
        <div className="nameContainer">
          <span className="name">Sergio</span>
          <span className="lastName">Vélez</span>
        </div>
        <div className="frase">
          <span>{"< "}En busqueda de mi mejor versión {" >"}</span>
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
          <span> {"< "} FULL STACK WEB DEVELOPER {" >"}</span>
        </div>
        {/* <div className="cv">
          <a href={cvFile} download="SergioVelezCV.pdf">
          <button className="buttonCv">
            <span>Descarga CV</span>
          </button>
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Sergio;
