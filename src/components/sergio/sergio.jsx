import "./sergio.css";
import React from "react";
import perfil from "../../assets/img/fotoperfil.jpg";
import github from "../../assets/img/icons8-github-50.png";
import link from "../../assets/img/icons8-linkedin-50.png";



function Sergio() {
  return (
    <section className="sergioSection">
      <div className="sergio">
        <div className="segioContainer">
          <div className="nameContainer">
          <span className="name">HOLA,SOY </span>
          <span className="name">SERGIO VÉLEZ</span>
          <span className="bienvenido">Apasionado programador web de Córdoba, Argentina</span>
          </div>
          <div className="contactButton">
          <a href="https://wa.link/49qto7" >
            <button className="contactMe">{"<"}CONTACTO{">"}</button>
            </a>
            <button className="linkedin">
              <img src={link} alt="" className="buttonImg"/>
            </button>
            <button className="linkedin">
              <img src={github} alt="" className="buttonImg"/>
            </button>
          </div>
        </div>
        <div className="perfilContainer">
          <img src={perfil} alt="" className="perfilFoto" />
        </div>
      </div>
    </section>
  );
}

export default Sergio;

{
  /* <div className="logos">
  <img src={html} alt="" className="html" />
  <img src={css} alt="" className="css" />
  <img src={js} alt="" className="js" />
  <img src={reactLogo} alt="" className="reactLogo" />
  <img src={node} alt="" className="node" />
  <img src={post} alt="" className="post" />
</div> */
}

// import "./sergio.css";
// import React from "react";
// import js from "../../assets/img/icons8-javascript-96.png";
// import html from "../../assets/img/icons8-html5-96.png";
// import css from "../../assets/img/icons8-css.svg";
// import reactLogo from "../../assets/img/icons8-reaccionar-80.png";
// import node from "../../assets/img/icons8-nodo-js.svg";
// import post from "../../assets/img/icons8-postgresql-100.png";
// import cvFile from "../../assets/cv/SergioVelezCV.pdf";
// import perfil from "../../assets/img/fotoperfil.jpg";

// function Sergio() {
//   return (
//     <section className="sergioSection">
//       <div className="sergio">
//         {/* <div className="perfilContainer">
//           <img src={perfil} alt="" className="perfilFoto" />
//         </div> */}
//         <div className="segioContainer">
//           <div className="nameContainer">
//             <span className="name">Sergio</span>
//             <span className="lastName">Vélez</span>
//           </div>
//           <span className="bienvenido">
//             {" "}
//             {"< "} SOFTWARE DEVELOPER {" >"}
//           </span>
//           <a href={cvFile} download="SergioVelezCV.pdf" className="aButton">
//             <button className="buttonCv">Descargar Curriculum</button>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
