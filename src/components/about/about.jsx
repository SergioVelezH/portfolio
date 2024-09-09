import "./about.css";
import perfil from "../../assets/img/fotoperfil.jpg";

function About() {
  return (
    <section className="aboutSection">
      <div className="aboutContainer">
        <span className="title">SOBRE MI</span>
            <span className="description">
              {"< "} ¡Bienvendios a mi portfolio! Mi nombre es Sergio Vélez
              tengo 22 años y soy de Córdoba Capital, Argentina . En 2022 empecé
              a introducirme a la industria IT mediante cursos de desarrollo web
              que me hicieron dar cuenta que era a lo que me queria dedicar. En
              este último tiempo y actualmente me he estado formando para poder
              conseguír mi primer trabajo en el mundo del desarrollo de
              software. Busco oportunidades desafiantes donde pueda aplicar mis
              conocimientos y contribuir al éxito de proyectos innovadores.
              {" >"}
            </span>
      </div>
    </section>
  );
}

export default About;
