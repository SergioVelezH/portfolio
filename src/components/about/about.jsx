import "./about.css";
import perfil from "../../assets/img/fotoperfil.jpg";

function About() {
  return (
    <section className="aboutSection">
      <div className="aboutContainer">
        <span className="title">SOBRE MI</span>
        <div className="descriptionContainer">
          <span className="description2">
            Soy un desarrollador web Argentino
            viviendo en Córdoba.
          </span>
          <span className="secondDescription2">
            Soy un desarrollador front-end con sede en Sydney que busca
            oportunidades interesantes. Tiene experiencia en Ingeniería
            Mecánica. Le gusta centrarse en la accesibilidad al desarrollar.
            Apasionado y curioso por la resolución de problemas. Actualmente,
            estoy explorando Reactjs, Webflow y un poco de Diseño. Si bien no
            programo, disfruto jugar al fútbol, ​​la fotografía y jugar a
            Valorant. Aprender más para mejorar las habilidades.
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;

{
  /* <span className="description">
            {"< "} ¡Bienvendios a mi portfolio! Mi nombre es Sergio Vélez tengo
            22 años y soy de Córdoba Capital, Argentina . En 2022 empecé a
            introducirme a la industria IT mediante cursos de desarrollo web que
            me hicieron dar cuenta que era a lo que me queria dedicar. En este
            último tiempo y actualmente me he estado formando para poder
            conseguír mi primer trabajo en el mundo del desarrollo de software.
            Busco oportunidades desafiantes donde pueda aplicar mis
            conocimientos y contribuir al éxito de proyectos innovadores.
            {" >"}
          </span> */
}
