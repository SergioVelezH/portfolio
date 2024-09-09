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
        <span className="skillsTitle">SKILLS</span>
      <div className="skillsContainer">
        <div className="lenguajesContainer">
          <div className="techLogos">
            <div className="subContainer">
              <img src={html} alt="" className="html2" />
              <img src={css} alt="" className="css2" />
              <img src={js} alt="" className="js2" />
              <img src={reactLogo} alt="" className="reactLogo2" />
            </div>
            <div className="subContainer">
              <img src={node} alt="" className="node2" />
              <img src={boot} alt="" className="boot" />
              <img src={vsc} alt="" className="vsc" />
              <img src={fig} alt="" className="fig" />
            </div>
          </div>
        </div>
        <div className="idiomasContainer">
          <div className="españolTitleImg">
            <img src={arg} alt="" className="españolImg" />
            <span className="español">Español Nativo</span>
          </div>
          <div className="españolTitleImg">
            <img src={usa} alt="" className="inglesImg" />
            <span className="ingles">Inglés B2</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
