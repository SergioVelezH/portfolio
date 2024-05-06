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
          <a href="https://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=30cae6fd8e2e651baca7728a25d35961732b665cd7c8f73301f3c6c4d909b65a">
          <button className="certificadoBoton">Certificado</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;
