import henry from "../../assets/img/henryImg.jpg";
import cvFile from "../../assets/cv/SergioVelezCV.pdf";

import "./education.css";

function Education() {
  return (
    <section className="educationSection">
        <span className="nombreSeccion">FORMACIÓN</span>
      <div className="educationContainer">
        <div className="formacion">
          <div className="henry">
            <span className="nombreCurso">Henry BootCamp</span>
            <span className="nombreTitulo">Full Stack Web Developer</span>
            <span className="duracion">
              BootCamp con +800 horas {" "}
            </span>
            <span className="año">|2023|</span>
            <a href="https://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=30cae6fd8e2e651baca7728a25d35961732b665cd7c8f73301f3c6c4d909b65a">
              <button className="certificado">Certificado</button>
            </a>
          </div>
          <div className="henryImgCointainer">
            <img src={henry} alt="" className="henryImg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
