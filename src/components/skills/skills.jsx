import "./skills.css";
import js from "../../assets/img/icons8-javascript-96.png";
import html from "../../assets/img/icons8-html5-96.png";
import css from "../../assets/img/icons8-css.svg";
import reactLogo from "../../assets/img/icons8-reaccionar-80.png";
import node from "../../assets/img/icons8-nodo-js.svg";
import boot from "../../assets/img/icons8-oreja-96.png";
import vsc from "../../assets/img/icons8-visual-studio-code-2019-96.png";
import fig from "../../assets/img/icons8-figura-96.png";
import arg from "../../assets/img/icons8-circular-argentina-96.png";
import usa from "../../assets/img/icons8-bandera-estadounidense-96.png";

function Skills() {
  return (
    <section className="sectionSkills">
      <div className="skillsContainer">
        <div className="skillsTitleContainer">
          <span className="skillsTitle">SKILLS</span>
        </div>
        <div className="lenguajesContainer">
          <div>
            <span className="techTitle">Habilidades Técnicas</span>
          </div>
          <div className="techLogos">
            <img src={html} alt="" className="html2" />
            <img src={css} alt="" className="css2" />
            <img src={js} alt="" className="js2" />
            <img src={reactLogo} alt="" className="reactLogo2" />
            <img src={node} alt="" className="node2" />
            <img src={boot} alt="" className="boot" />
            <img src={vsc} alt="" className="vsc" />
            <img src={fig} alt="" className="fig" />
          </div>
        </div>
        <div className="idiomasContainer">
          <div>
            <span className="idiomasTitle">Idiomas</span>
          </div>
          <div className="espIng">
            <div className="españolTitleImg">
              <span className="español">Español Nativo</span>
              <img src={arg} alt="" className="españolImg" />
            </div>
            <div className="españolTitleImg">
              <span className="ingles">Inglés B2</span>
              <img src={usa} alt="" className="inglesImg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
