import "./skills.css";
import js from "../../assets/img/Unofficial_JavaScript_logo_2.svg.png";
import html from "../../assets/img/icons8-html.svg";
import css from "../../assets/img/icons8-css.svg";
import reactLogo from "../../assets/img/icons8-reaccionar.svg";
import node from "../../assets/img/icons8-nodo-js-32.png";
import boot from "../../assets/img/icons8-logotipo-de-bootstrap.svg"
import thu from "../../assets/img/pngaaa.com-6730443.png"
import vsc from "../../assets/img/icons8-visual-studio-code-2019.svg"
import fig from "../../assets/img/icons8-figura.svg"

function Skills() {
  return (
    <section className="sectionSkills">
    <div className="skillsContainer">
      <div className="skillsTitleContainer">
        <span className="skillsTitle">SKILLS</span>
      </div>
      <div className="lenguajesContainer">
        <div>
          <span className="lenguajeTitle">Lenguajes de programación</span>
        </div>
        <div className="lenguajesLogos">
          <img src={html} alt="" className="html2" />
          <img src={css} alt="" className="css2" />
          <img src={js} alt="" className="js2" />
        </div>
      </div>
      <div className="frameworksContainer">
        <div>
          <span className="frameworkTitle">FrameWorks y Librerias</span>
        </div>
        <div className="frameworkLogos">
          <img src={reactLogo} alt="" className="reactLogo2" />
          <img src={node} alt="" className="node2" />
          <img src={boot} alt="" className="boot"/>
        </div>
      </div>
      <div className="softwareContainer">
        <div>
          <span className="softwareTitle">Software y Herramientas</span>
        </div>
        <div>
          <img src={thu} alt="" className="thu" />
          <img src={vsc} alt="" className="vsc" />
          <img src={fig} alt="" className="fig"/>
        </div>
      </div>
      <div className="idiomasContainer">
        <div>
          <span className="idiomasTitle">Idiomas</span>
        </div>
        <div className="idiomasOrder">
          <span className="español">Español Nativo</span>
          <span className="ingles">Ingles B2</span>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Skills;
