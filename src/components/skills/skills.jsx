import "./skills.css";


function Skills() {
  return (
    <section className="aboutSection">
      <div className="aboutContainer">
        <span className="title">HABILIDADES</span>
        <div className="descriptionContainerSkills">
          <span className="description3">
            Estoy siempre buscando cosas nuevas para aprender y poder ampliar mis conocimientos
          </span>
          <div className="skillsContainer">
            <div className="frontSkills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
              <span>REACT</span>
            </div>
            <div className="frontSkills">
               <span>NODE </span>
               <span>TYPESCRIPT</span>
               <span>VSC</span>
               <span>FIGMA</span> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;



{/* <section className="sectionSkills">
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
</section> */}