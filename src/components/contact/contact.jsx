import "./contact.css";
import fig from "../../assets/img/icons8-gmail-nuevo-96.png";
import telefono from "../../assets/img/icons8-teléfono-celular-96.png";
import link from "../../assets/img/icons8-linkedin.svg";
import wsp from "../../assets/img/icons8-whatsapp-96.png";
import github from "../../assets/img/icons8-github-100.png";

function Contact() {
  return (
    <section className="sectionContact">
      <div>
        <span className="tituloContacto">Contactame!</span>
      </div>
      <div className="logosContacto">
        <div>
          <a href="https://github.com/SergioVelezH">
            <img src={github} alt="" className="logo" />
          </a>
        </div>
        <div>
          <a href="https://wa.link/49qto7">
            <img src={wsp} alt="" className="logo" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/sergio-v%C3%A9lez-435510284/">
            <img src={link} alt="" className="logo" />
          </a>
        </div>
      </div>
      <div className="telefonoMail">
        <span className="telefono">Telefono : +54 9 351-347-4734</span>
        <span className="telefono">
          Mail : sergiovelezhernandez11@gmail.com
        </span>
      </div>
    </section>
  );
}

export default Contact;
