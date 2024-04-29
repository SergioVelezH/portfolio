import "./education.css";

function Education() {
  return (
    <section className="educationSection">
    <div className="educationContainer">
      <div className="educationTitle">
        <span className="titleEdu">FORMACION</span>
      </div>
      <div className="academia">
        <span>Henry Bootcamp</span>
      </div>
      <div className="tituloCarrera">
        <span className="underline">Full Stack Web Developer</span>
      </div>
      <div className="fecha">
        <span>Agosto 2023 - Diciembre 2023</span>
      </div>
      <div className="duracion">
        <span>Curso de +800 horas</span>
      </div>
      <div className="containerBoton">
        <button className="certificadoBoton">Certificado</button>
      </div>
    </div>
    </section>
  );
}

export default Education;
