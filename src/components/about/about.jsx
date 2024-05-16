import "./about.css";
import perfil from "../../assets/img/fotoperfil.jpg";

function About() {
  return (
    <section className="aboutSection">
      <div className="aboutContainer">
        <div className="titleContainer">
          <span className="title">SOBRE MI</span>
        </div>
        <div className="descriptionContainer">
          <div className="secondContainer">
            <span className="description">
              {"< "} !Bienvendios a mi portfolio! Mi nombre es Sergio Vélez
              tengo 22 años y soy de Córdoba Capital, Argentina . En 2022 empece
              a introducirme a la industria IT mediante cursos de desarrollo web
              que me hicieron dar cuenta que era a lo que me queria dedicar. En
              este ultimo tiempo y actaulmente me he estado formando para poder
              conseguir mi primer trabajo en el mundo del desarrollo de
              software. Busco oportunidades desafiantes donde pueda aplicar mis
              conocimientos y contribuir al éxito de proyectos innovadores.
              {" >"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
